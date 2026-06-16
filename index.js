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


const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const removeDuplicateSort = (arr) => {
    // remove duplicates in array
    const set = new Set(arr);
    const cleanArr = [...set];

    // sort array
    const sortedArr = cleanArr.sort( (a, b) => { return a - b });

    return sortedArr;
}



// console.log(tree.buildTree([1, 2, 3]))
prettyPrint(tree.buildTree(removeDuplicateSort(array)))
// prettyPrint(tree.buildTree(array));