import { Tree } from "./bst.js";
import { prettyPrint } from "./functions.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(array);
// console.log(tree.buildTree([1, 2, 3]))
// prettyPrint(tree.buildTree(removeDuplicateSort(array)))
// prettyPrint(tree.buildTree(array));
// console.log(tree)
console.log(prettyPrint(tree.root))