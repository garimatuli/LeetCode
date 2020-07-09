// LC 700 - https://leetcode.com/problems/search-in-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      //let level = [];
      let current = queue.shift();
      //level.push(current.val);
      if (current.val === val) return current;
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
      size--;
    }
  }
  return []; // In leetcode, mention it as return null to be correct!!
};

// Input [4,2,7,1,3] , 2 ; Output [2,1,3]
// Input [4,2,7,1,3] , 5 ; Output []

const root = {
  val: 4,
  right: { val: 7, left: null, right: null },
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
};

let val = 2;
console.log(searchBST(root, val)); // Output[(2, 1, 3)];
