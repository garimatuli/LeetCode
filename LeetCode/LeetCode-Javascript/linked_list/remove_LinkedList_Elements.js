// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/
// LC 203 - https://leetcode.com/problems/remove-linked-list-elements/
// Runtime: 104 ms, beats 28.97 % of javascript submissions
// Memory Usage: 41.4 MB
// Time Complexity: O(n), n is the total number of elements
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // if head === val, to remove head, simply point head to the next node
  while (head && head.val === val) {
    head = head.next;
  }
  let current = head;
  let previous = null;
  while (current != null) {
    if (current.val === val) {
      // remove current node if value matches and keep previous node the same
      previous.next = current.next;
    } else {
      // otherwise update previous node with current node for the next iteration
      previous = current;
    }
    current = current.next;
  }
  return head;
};
// Input:  1->2->6->3->4->5->6, val = 6
let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
      },
    },
  },
};
console.log(removeElements(l1, 6)); // Output: 1->2->3->4->5
