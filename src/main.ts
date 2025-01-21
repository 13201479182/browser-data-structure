import { Heap, Tree } from '@hyuan/browser-data-structure/src/index';

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
                    children: [
                        {
                            id: '1-1-1',
                            name: '节点1-1-1',
                            children: [],
                        },
                    ],
                },
                {
                    id: '1-2',
                    name: '节点1-2',
                    children: [],
                },
                {
                    id: '1-2',
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

// const h = new Heap<{
//     name: string;
// }>();

const t = new Tree(nodes);

// t.depthFirstTraversal((node) => {
//     console.log(333, node.id);
//     if (node.id === '1-2') {
//         // return true;
//     }
// });
