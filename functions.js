export const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

export const removeDuplicateThenSort = (arr) => {
    // remove duplicates in array
    const set = new Set(arr);
    const cleanArr = [...set];

    // sort array
    const sortedArr = cleanArr.sort( (a, b) => { return a - b });

    return sortedArr;
}