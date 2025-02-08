// import { Tree } from '@hyuan/browser-data-structure/src/index';
// import { Tree } from '@hyuan/browser-data-structure';

import { Chalk } from '@hyuan/chalk/src/index';

const a = new Chalk({
    l: '#606060',
    v: '#42c02e',
});

a.log('event', '1212122');
a.image('https://liuhuiyuan.site/avatar.webp', {
    width: 200,
    height: 200,
});
a.version('Chalk', '0.0.1');
a.hearts('哈哈', {
    color: 'v',
    fontSize: 50,
    bgColor: '_lightYellow',
    heartColor: '_purple',
    padding: [50, 100],
});

// const nodes = {
//     id: 'root',
//     name: '根节点',
//     children: [
//         {
//             id: '1',
//             name: '节点1',
//             children: [
//                 {
//                     id: '1-1',
//                     name: '节点1-1',
//                     children: [
//                         {
//                             id: '1-1-1',
//                             name: '节点1-1-1',
//                             children: [],
//                         },
//                     ],
//                 },
//                 {
//                     id: '1-2',
//                     name: '节点1-2',
//                     children: [],
//                 },
//                 {
//                     id: '1-2',
//                     name: '节点1-3',
//                     children: [],
//                 },
//                 {
//                     id: '1-4',
//                     name: '节点1-4',
//                     children: [],
//                 },
//             ],
//         },
//         {
//             id: '2',
//             name: '节点2',
//             children: [{ id: '2-1', name: '节点2-1', children: [] }],
//         },
//         {
//             id: '3',
//             name: '节点3',
//             children: [
//                 { id: '3-1', name: '节点3-1', children: [] },
//                 { id: '3-2', name: '节点3-2', children: [] },
//             ],
//         },
//     ],
// };

// const h = new Heap<{
//     name: string;
// }>();

// const t = new Tree(nodes);
// console.log(t);

// t.depthFirstTraversal((node) => {
//     console.log(333, node.id);
//     if (node.id === '1-2') {
//         // return true;
//     }
// });

// const a = new Chalk();
// debugger;
// a.log('error', '1212122');
