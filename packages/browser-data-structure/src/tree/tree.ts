type DefaultRequiredField = {
    id: string | number;
    data?: unknown;
    parent?: unknown;
    children: DefaultRequiredField[];
};

export class TreeNode<T extends DefaultRequiredField = DefaultRequiredField> {
    public id: string | number;
    public data: T;
    public parent: TreeNode<T> | null;
    public children: TreeNode<T>[];

    constructor(data: T, parent?: TreeNode<T>) {
        this.id = data.id;
        this.data = data;
        this.parent = parent ?? null;
        if (Array.isArray(data.children)) {
            if (data.children.length) {
                this.children = data.children.map(
                    (child) => new TreeNode(child as T, this),
                );
            } else {
                this.children = [];
            }
        }
    }
}

export class Tree<T extends DefaultRequiredField = DefaultRequiredField> {
    public root: TreeNode<T> | null;
    public nodeMap: Map<DefaultRequiredField['id'], TreeNode<T>> = new Map();

    constructor(data: T) {
        if (data) {
            this.root = new TreeNode(data);
            this._initNodeMap();
        }
    }

    // 深度优先遍历
    depthFirstTraversal(callback: (node: TreeNode<T>) => true | void) {
        let stopFlag = false;

        (function recusive(nodes: TreeNode<T>[]) {
            if (stopFlag) return;

            if (Array.isArray(nodes) && nodes.length) {
                for (const node of nodes) {
                    // 避免递归时第一层级节点并发执行
                    if (!stopFlag && callback(node)) {
                        stopFlag = true;
                        return;
                    } else {
                        recusive(node.children);
                    }
                }
            }
        })([this.root]);
    }

    // 广度优先遍历
    breadthFirstTraveral(callback: (node: TreeNode<T>) => true | void) {
        const queue: TreeNode<T>[] = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                if (callback(node)) break;
                if (Array.isArray(node.children) && node.children.length) {
                    queue.push(...node.children);
                }
            }
        }
    }

    // 将树节点映射到nodeMap中
    _initNodeMap() {
        this.depthFirstTraversal((node) => {
            this._verifyNode(node);
            this.nodeMap.set(node.id, node);
        });
    }

    // 对节点进行校验
    _verifyNode(node: TreeNode<T>) {
        const { nodeMap } = this;
        // 节点ID重复
        if (nodeMap.has(node.id)) {
            throw new Error(`NodeID Repeat: ${node.id}`);
        }
    }
}
