// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3389/
// LC 100 - https://leetcode.com/problems/same-tree/
// Solution - https://leetcode.com/articles/same-tree/
// Using Recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // both are null thus equal
  if (!p && !q) return true;
  // not equal if either of the nodes is null
  // OR
  // if both are not null but values are different
  if ((!p && q) || (!q && p) || p.val !== q.val) return false;
  // recursive call to compare child nodes
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const root1 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: null, right: null, left: null },
};

const root2 = {
  val: 1,
  left: { val: null, right: null, left: null },
  right: { val: 2, right: null, left: null },
};

// input [1, 2], [1, null, 2]
console.log(isSameTree(root1, root2)); // false

const root3 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: 3, right: null, left: null },
};

const root4 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: 3, right: null, left: null },
};
// input [1, 2, 3], [1, 2, 3]
console.log(isSameTree(root3, root4)); // true

const root5 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: 1, right: null, left: null },
};

const root6 = {
  val: 1,
  left: { val: 1, right: null, left: null },
  right: { val: 2, right: null, left: null },
};
// input [1, 2, 1], [1, 1, 2]
console.log(isSameTree(root5, root6)); // false
