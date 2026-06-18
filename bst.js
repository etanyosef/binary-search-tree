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

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return value + ' inserted to the tree.';
        }

        const insertNode = (currNode) => {
            // do nothing if the value already exist
            if (value === currNode.data) {
                return;
            }

            // go left if the value is lesser than the current data
            if (value < currNode.data) {
                if (currNode.left === null) {
                    currNode.left = new Node(value);
                    return;
                }
                insertNode(currNode.left);
                return;
            }

            // go right if the value is greater than the current data
            if (value > currNode.data) {
                if (currNode.right === null) {
                    currNode.right = new Node(value);
                    return;
                }
                insertNode(currNode.right);
                return;
            }
        }

        insertNode(this.root);
    }

    deleteItem(value) {
        if (this.root === null) return null;

        const deleteNode = (currNode, value) => {
            // value not found
            if (currNode === null) return null;

            if (value < currNode.data) {
                currNode.left = deleteNode(currNode.left, value);
            } 
            // go to left node
            else if (value > currNode.data) {
                currNode.right = deleteNode(currNode.right, value);
            } 
            // go to right node
            else {
                if (currNode.left === null) return currNode.right;

                if (currNode.right === null) return currNode.left;

                const children = getChildren(currNode);

                currNode.data = children.data;

                currNode.right = deleteNode(currNode.right, children.data);
            }

            return currNode;
        };

        const getChildren = (currNode) => {
            currNode = currNode.right;

            while (currNode !== null && currNode.left !== null) {
                currNode = currNode.left;
            }

            return currNode;
        };

        this.root = deleteNode(this.root, value);
    }

}
