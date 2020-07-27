// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3403/
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Runtime: 160 ms, faster than 31.32% of JavaScript online submissions; Memory: 110.6 MB
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

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;

  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  // root is at the end of postorder
  let root = new TreeNode(postorder.pop());
  let pivot = inorder.indexOf(root.val);

  // inorder is of the form left,root,right
  // postorder is of the form left,right,root

  //Left Subtree
  let leftInorder = inorder.slice(0, pivot);
  let leftPostorder = postorder.slice(0, pivot);
  root.left = buildTree(leftInorder, leftPostorder);

  //Right Subtree
  let rightInorder = inorder.slice(pivot + 1);
  let righPostorder = postorder.slice(pivot);
  root.right = buildTree(rightInorder, righPostorder);

  return root;
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
