import { Tree } from "./bst.js";

const tree = new Tree();

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

// console.log(tree.buildTree([1, 2, 3]))
prettyPrint(tree.buildTree([1, 2, 3, 4, 5, 6, 7]))