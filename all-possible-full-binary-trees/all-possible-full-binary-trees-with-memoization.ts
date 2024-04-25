/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
 val: number;
 left: TreeNode | null;
 right: TreeNode | null;

 constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
 }
}

function treeNodeToArray(node: TreeNode | null): (number | null)[] {
    if (node === null) return [null];
    return [node.val, ...treeNodeToArray(node.left), ...treeNodeToArray(node.right)];
}

function allPossibleFBT(n: number): Array<TreeNode | null> {
    if (n % 2 === 0) return [];
    if (n === 1) return [new TreeNode(0)];
    
    const cache: Record<number, Array<TreeNode | null>> = {};
    cache[0] = [];
    cache[1] = [new TreeNode(0)];

    function dfs(size: number) {
        if(cache[size]) return;
        const result: Array<TreeNode | null> = [];
        for (let i = 1; i < size; i += 2) {
            const leftSize = i;
            const rightSize = size - i - 1;
            dfs(leftSize);
            dfs(rightSize);
            cache[leftSize].forEach(leftNode => {
                cache[rightSize].forEach(rightNode => {
                    const node = new TreeNode(0,leftNode,rightNode);
                    result.push(node);
                })
            })
        }
        cache[size] = result;
    }
    dfs(n);
    return cache[n];
}

const result = allPossibleFBT(7).map(treeNodeToArray);
console.log(result);

const test: (number|null)[][] = [
    [0, 0, null],
    [null, 0, null]
];

console.log(test);