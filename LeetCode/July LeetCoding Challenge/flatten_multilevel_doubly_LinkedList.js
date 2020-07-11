// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3386/
// LC 430 - https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// 22 / 22 test cases passed ; Runtime: 96 ms; Memory Usage: 34.4 MB

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/* Basic idea is to always follow a child when you see one.
In case of a child, push what would have been next, onto a stack.
Resume from the stack if you run into there not being a next node.
*/

var flatten = function (head) {
  if (!head) return head;

  let stack = []; // stores remaining next nodes in case current node has a child
  let current = head;

  while (current) {
    // If current node has child, start exploring the child level below
    if (current.child) {
      if (current.next) stack.push(current.next); // checking cur.next is not null before adding to stack
      current.next = current.child;
      current.next.prev = current; // keeping track of previous pointer too in doubly linkedlist
      current.child = null; // already assigned to next,so no more child
    }
    // If reached the end of current level, resume by popping the stack
    else if (!current.next && stack.length != 0) {
      current.next = stack.pop();
      current.next.prev = current;
    }
    // In case current node has no child, move to next node at the same level
    current = current.next;
  }
  return head;
};

myObj = {
  val: 1,
  prev: null,
  next: {
    val: 2,
    prev: { val: 1, prev: null, next: null, child: null },
    next: null,
    child: null,
  },
  child: { val: 3, prev: null, next: null, child: null },
};

console.log(flatten(myObj));

// input = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// output = [1,2,3,7,8,11,12,9,10,4,5,6]

// input = [1,2,null,3]
// output =  [1,3,2]

// input = []
// output = []
