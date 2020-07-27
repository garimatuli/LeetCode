// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3398/
// LC 103 - https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Runtime: 76 ms, beats 42.09 % of javascript submissions ; Memory Usage: 37.3 MB
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  let queue = [];
  let results = [];
  let flag = 1; // to reverse the order everytime we push a level.
  queue.push(root);
  while (queue.length > 0) {
    let level = []; /* collect node.vals for current level */
    let size = queue.length; /* to use a loop bounded by the queue size */
    while (size > 0) {
      let current = queue.shift(); /* remove and capture next item from queue */
      level.push(current.val);
      /* explore if we have a left or right subtree */
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
      size--; /* level complete, decrement size and proceed */
    }
    /* push each level's result in results and toggle flag's value*/
    if (flag) {
      results.push(level);
      flag = 0;
    } else {
      results.push(level.reverse());
      flag = 1;
    }
  }
  return results;
};

// Input = [3, 9, 20, null, null, 15, 7];

const root = {
  val: 3,
  left: { val: 9, right: null, left: null },
  right: {
    val: 20,
    right: { val: 7, right: null, left: null },
    left: { val: 15, right: null, left: null },
  },
};

console.log(zigzagLevelOrder(root)); // Output [[3], [20, 9], [15, 7]];
