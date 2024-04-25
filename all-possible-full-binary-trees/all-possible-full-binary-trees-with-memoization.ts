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

// function allPossibleFBT(n: number): Array<TreeNode | null> {
// // function allPossibleFBT(n: number): (TreeNode | null)[] {
//     let memo: Array<Array<TreeNode | null>> = [];
//     // let memo: (TreeNode | null)[][] = [];
//     const util = (n: number) => {
//         if(n === 1){
//             return ([new TreeNode(0)]);
//         }
//         if(memo[n]){
//             return memo[n];
//         }

//         let ans: Array<TreeNode | null> = [];
//         // let ans: (TreeNode | null)[] = [];
//         for(let i = 1; i < n; i = i + 2){
//             let leftNodes = util( i );
//             let rightNodes = util( n - i - 1);
//             for(let leftNode of leftNodes){
//                 for(let rightNode of rightNodes){
//                     let root = new TreeNode(0);
//                     root.left = leftNode;
//                     root.right = rightNode;
//                     ans.push(root);
//                 }
//             }
//         }
//         memo[n] = ans;
//         return memo[n];
//     }
//     return util(n);
// }

// function allPossibleFBT(n: number): Array<TreeNode | null> {
//     if (n == 1) {
//         return [new TreeNode(0, null, null)];
//     }
//     const res: Array<TreeNode | null> = [];

//     for (let i=1; i <= n - 2; i += 2) {
//         const left = allPossibleFBT(i);
//         const right = allPossibleFBT((n - 1) - i);

//         left.forEach(node1 => {
//             right.forEach(node2 => {
//                 const root = new TreeNode(0, node1, node2);
//                 res.push(root);
//             });
//         });
//     }

//     return res;
// }

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

console.log(allPossibleFBT(7
));