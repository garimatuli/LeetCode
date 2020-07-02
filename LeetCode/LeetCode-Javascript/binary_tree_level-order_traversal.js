
// LC102 - https://leetcode.com/problems/binary-tree-level-order-traversal/

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

  // console.log(" 1 - queue.length = ", queue.length);

  while (queue.length > 0) {
    let level = []; /* collect node.vals for current level */
    let size = queue.length; /* to use a loop bounded by the queue size */
    // console.log(" 2 - queue.length = ", queue.length);
    // console.log(" 2 - size = ", size);

    while (size > 0) {
      /*  shift method removes the element at the zeroeth index
       * and shifts the values at consecutive indexes down, then returns the removed value.
       */
      //   console.log("queue before shift");
      let current = queue.shift(); /* remove and capture next item from queue */
      //   console.log(current);
      //   console.log(current.val);
      //   console.log("queue after shift");

      level.push(current.val);
      //   console.log(level);
      //   console.log(" 3 - queue.length = ", queue.length);
      //   console.log(" 3 - size = ", size);

      /* explore if we have a left or right subtree */
      if (current.left != null) {
        queue.push(current.left);
        //console.log("Left queue" + queue);
      }
      //   console.log(" 4 - queue.length = ", queue.length);
      //   console.log(" 4 - size = ", size);
      if (current.right != null) {
        queue.push(current.right);
        // console.log("Right queue" + queue);
      }
      //   console.log(" 5 - queue.length = ", queue.length);
      //   console.log(" 5 - size = ", size);
      size--; /* level complete, decrement size and proceed */
    }

    results.push(level); /* push each level's result in results */
    // console.log("result =", results);
  }
  return results; /* return results*/
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

// Output [[3],[9,20],[15,7]]
