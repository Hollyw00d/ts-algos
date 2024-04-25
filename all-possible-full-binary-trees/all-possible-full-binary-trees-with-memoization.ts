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
function allPossibleFBT(n: number): (TreeNode | null)[] {
    // let memo: Array<Array<TreeNode | null>> = [];
    let memo: (TreeNode | null)[][] = [];
    const util = (n: number)=>{
        if(n === 1){
            return ([new TreeNode(0)])
        }
        if(memo[n]){
            return memo[n]
        }

        // let ans: Array<TreeNode | null> = [];
        let ans: (TreeNode | null)[] = [];
        for(let i = 1; i < n; i = i + 2){
            let leftNodes = util(i);
            let rightNodes = util( n - i - 1);
            for(let leftNode of leftNodes){
                for(let rightNode of rightNodes){
                    let root = new TreeNode(0);
                    root.left = leftNode;
                    root.right = rightNode;
                    ans.push(root);
                }
            }
        }
        memo[n] = ans;
        return memo[n];
    }
    return util(n)
};

console.log(allPossibleFBT(1));