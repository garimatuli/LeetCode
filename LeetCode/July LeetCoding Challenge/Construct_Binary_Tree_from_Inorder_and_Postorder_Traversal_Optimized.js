//leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3403/
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Optimized Solution
// Runtime: 84 ms, faster than 88.95% of JavaScript online submissions; Memory: 40.3 MB
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

https: var buildTree = function (inorder, postorder) {
  let obj = {};

  inorder.forEach((v, i) => (obj[v] = i));

  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  function recur(start, end) {
    if (start > end) return null;
    let root = new TreeNode(postorder.pop());
    let index = obj[root.val];
    root.right = recur(index + 1, end);
    root.left = recur(start, index - 1);
    return root;
  }
  return recur(0, inorder.length - 1);
};

inorder = [9, 3, 15, 20, 7];
postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
// Output
// TreeNode {
//     val: 3,
//     left: TreeNode { val: 9, left: null, right: null },
//     right:
//      TreeNode {
//        val: 20,
//        left: TreeNode { val: 15, left: null, right: null },
//        right: TreeNode { val: 7, left: null, right: null } } }
