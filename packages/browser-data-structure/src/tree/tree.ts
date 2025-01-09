export class TreeNode<T extends RequiredField<T>> {
    public data: T;
    public parent: TreeNode<T> | null;
    public children: TreeNode<T>[];

    constructor(data: T) {
        this.data = data;
        this.parent = null;
        if (Array.isArray(data.children)) {
        }
    }
}

type RequiredField<T> = {
    id: string | number;
    children: (T & RequiredField<T>)[];
};
export class Tree<T extends RequiredField<T>> {
    public root: TreeNode<T> | null;
    public data: T | null;

    constructor(data: T) {
        if (data) {
            this.data = data;
            this.root = new TreeNode(data);
        }
    }

    // 深度优先遍历
    depthFirstTraversal() {}

    // 广度优先遍历
    breadthFirstTraveral() {}
}

const nodes = {
    id: 'root',
    name: '根节点',
    children: [
        {
            id: '1',
            name: '节点1',
            children: [
                {
                    id: '1-1',
                    name: '节点1-1',
                    children: [],
                },
                {
                    id: '1-2',
                    name: '节点1-2',
                    children: [],
                },
                {
                    id: '1-3',
                    name: '节点1-3',
                    children: [],
                },
                {
                    id: '1-4',
                    name: '节点1-4',
                    children: [],
                },
            ],
        },
        {
            id: '2',
            name: '节点2',
            children: [{ id: '2-1', name: '节点2-1', children: [] }],
        },
        {
            id: '3',
            name: '节点3',
            children: [
                { id: '3-1', name: '节点3-1', children: [] },
                { id: '3-2', name: '节点3-2', children: [] },
            ],
        },
    ],
};

// type TreeNode = {};
const a = new Tree(nodes);
const r = a.root.data;
