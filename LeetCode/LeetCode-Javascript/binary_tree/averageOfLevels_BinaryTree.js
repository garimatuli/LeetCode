// https://leetcode.com/problems/average-of-levels-in-binary-tree/
// Runtime: 128 ms, faster than 9.88% of JavaScript online submissions for Average of Levels in Binary Tree.
// LC 637 - Average of Levels in Binary Tree

var averageOfLevels = function (root) {
  if (!root) return [];

  let queue = [];
  queue.push(root);
  let result = [];

  while (queue.length) {
    let size = queue.length;
    let level = [];
    let average = 0;
    while (size > 0) {
      let current = queue.shift();
      if (current.val == 0) level.push(0);
      if (current.val) level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      size--;
    }
    // reduce() method executes a provided function for each value of the array (from left-to-right)
    average = level.reduce((a, b) => a + b) / level.length;
    result.push(average);
  }
  return result;
};

const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

const root1 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: null, left: null, right: null },
};

const root2 = { val: 3, left: null, right: null };
const root3 = { val: 0, left: null, right: null };
const root4 = {
  val: 0,
  left: { val: -1, left: null, right: null },
  right: null,
};

console.log(averageOfLevels(root)); // Output [ 3, 14.5, 11 ]
console.log(averageOfLevels(root2)); // Input [3] -> Output [ 3 ]
console.log(averageOfLevels(root3)); // Input [0] -> Output [ 0 ]
console.log(averageOfLevels(root1)); // Input [1,2] -> Output [ 1, 2 ]
console.log(averageOfLevels(root4)); // Input [0,-1] -> Output [ 0, -1 ]
