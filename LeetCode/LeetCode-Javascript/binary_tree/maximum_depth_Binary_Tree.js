// LC 104 - https://leetcode.com/problems/maximum-depth-of-binary-tree/
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
// Runtime: 84 ms, faster than 26.22% of JavaScript online submissions for Maximum Depth of Binary Tree.

// Given binary tree [3,9,20,null,null,15,7]

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

const root2 = { val: 0, left: null, right: null };

var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [];
  let depth = 0;
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let current = [];
    while (size > 0) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      size--;
    }
    depth++;
  }
  return depth;
};

console.log(maxDepth(root)); // Output 3
console.log(maxDepth(root2)); // Input [0] -> Output 1
console.log(maxDepth(root1)); // Input [1,2] -> Output 2
