import { Tree } from "./bst.js";
import { prettyPrint } from "./functions.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(array);
// console.log(tree.buildTree([1, 2, 3]))
// prettyPrint(tree.buildTree(removeDuplicateSort(array)))
// prettyPrint(tree.buildTree(array));
// console.log(tree)
console.log(prettyPrint(tree.root))

console.log(tree.root.data)

console.log(tree.includes(2))
console.log(tree.insert(2))
console.log(tree.includes(2))
prettyPrint(tree.root)
console.log(tree.deleteItem(2))
console.log(tree.includes(2))
prettyPrint(tree.root)

const values = [];
console.log(tree.levelOrderForEach((value) => { values.push(value)}))
console.log(values.length)

const vals = [];
console.log(tree.inOrderForEach((val) => {vals.push(val)}))
console.log(vals)
