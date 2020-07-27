// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3385/
// LC 662 - https://leetcode.com/problems/maximum-width-of-binary-tree/

// If we don't use min, this edge-case will fail
// Input = [1,1,1,1,1,1,1,null,null,null,1,null,null,null,null,2,2,2,2,2,2,2,null,2,null,null,2,null,2]
// Output = 8

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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (root == null) return 0;
  let queue = [],
    width = 0,
    level_width = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    let level = [],
      size = queue.length,
      min = Number.MAX_VALUE,
      max = 0;
    while (size > 0) {
      let [current, position] = queue.shift();
      level.push([current.val, position]);
      min = Math.min(min, position);
      max = Math.max(max, position);
      if (current.left != null) queue.push([current.left, position * 2]);
      if (current.right != null) queue.push([current.right, position * 2 + 1]);
      size--;
    }
    // console.log("level = " + level);
    level_width.push(level.length === 1 ? 1 : max - min + 1);
    // console.log(level_width);
  }
  width = level_width.reduce((a, b) => Math.max(a, b));
  return width;
};

// Input = [1, 3, 2, 5, 3, null, 9];
const root = {
  val: 1,
  right: { val: 2, left: null, right: 9 },
  left: {
    val: 3,
    right: { val: 3, right: null, left: null },
    left: { val: 5, right: null, left: null },
  },
};

console.log(widthOfBinaryTree(root)); // 4

// If we don't use min, this case will fail
// Input = [1,1,1,1,1,1,1,null,null,null,1,null,null,null,null,2,2,2,2,2,2,2,null,2,null,null,2,null,2]
// Output = 8
