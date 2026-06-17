import { removeDuplicateThenSort } from "./functions.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(arr) {
        const cleanArray = removeDuplicateThenSort(arr);
        this.root = this.buildTree(cleanArray);
    }

    buildTree(arr, start = 0, end = arr.length) {
        if (start > end) return null;

        // sort array
        // arr = arr.sort( (a, b) => { return a - b;} );

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        // divide from middle element
        root.left = this.buildTree(arr, start, mid - 1);
        root.right = this.buildTree(arr, mid + 1, end);

        return root;
    }

    includes(value) {
        const searchTree = (currNode) => {
            if (currNode === null) return false;

            if (value === currNode.data) return true;

            if (value < currNode.data) return searchTree(currNode.left);

            if (value > currNode.data) return searchTree(currNode.right);
        };

        return searchTree(this.root);
    }

}
