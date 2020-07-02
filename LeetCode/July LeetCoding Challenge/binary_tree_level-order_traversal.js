// Leet Code July Challenge - July 2
// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3378/
// 34 / 34 test cases passed; Runtime: 120 ms; Memory Usage: 38.6 MB

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function (root) {
  if (root == null) {
    return [];
  }

  let queue = [];
  let results = [];

  queue.push(root);

  while (queue.length > 0) {
    let level = []; /* collect node.vals for current level */
    let size = queue.length; /* to use a loop bounded by the queue size */

    while (size > 0) {
      /*  shift method removes the element at the zeroeth index
       * and shifts the values at consecutive indexes down, then returns the removed value.
       */

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

    results.push(level); /* push each level's result in results */
  }
  return results.reverse(); /* return results, in reverse order */
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

console.log(levelOrderBottom(root));

// Output [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
