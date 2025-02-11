import { Chalk } from '@hyuan/chalk';
new Chalk().log('event', 'hello world');

type DefaultRequiredField = {
    id: string | number;
    data?: unknown;
    parent?: unknown;
    children: DefaultRequiredField[];
};

export class TreeNode<T extends DefaultRequiredField = DefaultRequiredField> {
    public id: string | number;
    public data: T;
    public parent: TreeNode<T> | null = null;
    public children: TreeNode<T>[] = [];

    constructor(data: T, parent: TreeNode<T> | null) {
        this.id = data.id;
        this.data = data;
        this.parent = parent ?? null;
        if (parent) {
            parent.children.push(this);
        }
    }
}

export class Tree<T extends DefaultRequiredField = DefaultRequiredField> {
    public root: TreeNode<T> | null = null;
    public nodeMap = new Map<DefaultRequiredField['id'], TreeNode<T>>();

    constructor(data: T) {
        if (data) {
            this._init(data);
        }
    }

    // 初始化树
    _init(data: T) {
        const nodeMap = this.nodeMap;

        (function recusive(this: Tree<T>, data: T, parent: TreeNode<T> | null) {
            // 校验节点id重复
            if (nodeMap.has(data.id)) {
                throw new Error(`NodeID Repeat: ${JSON.stringify(data)}`);
            }
            // 创建并缓存节点
            const treeNode = new TreeNode(data, parent);
            nodeMap.set(data.id, treeNode);
            // 建立根节点引用
            if (parent === null) {
                this.root = treeNode;
            }
            // 递归处理子节点
            if (Array.isArray(data.children) && data.children.length) {
                data.children.forEach((child) => {
                    recusive.call(this, <T>child, treeNode);
                });
            }
        }).call(this, data, null);
    }

    // 深度优先遍历
    depthFirstTraversal(callback: (node: TreeNode<T>) => true | void) {
        let stopFlag = false;

        (function recusive(nodes: TreeNode<T>[] | null) {
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
        })(this.root ? [this.root] : null);
    }

    // 广度优先遍历
    breadthFirstTraveral(callback: (node: TreeNode<T>) => true | void) {
        if (this.root) {
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
    }
}
