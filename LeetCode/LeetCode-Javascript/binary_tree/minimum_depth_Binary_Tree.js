// LC 111 - https://leetcode.com/problems/minimum-depth-of-binary-tree/
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.
// Runtime: 72 ms, faster than 68.88% of JavaScript online submissions for Minimum Depth of Binary Tree.

var minDepth = function (root) {
  if (!root) return 0;

  let queue = [];
  queue.push(root);
  let depth = 0;

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      let currentNode = queue.shift();
      if (currentNode.left == null && currentNode.right == null) {
        depth++;
        return depth;
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      size--;
    }
    depth++;
  }
  return depth;
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

const root1 = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: { val: null, left: null, right: null },
};

const root2 = { val: 0, left: null, right: null };

console.log(minDepth(root)); // Output 2
console.log(minDepth(root2)); // Input [0] -> Output 1
console.log(minDepth(root1)); // Input [1,2] -> Output 2
