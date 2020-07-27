// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/
// LC 203 - https://leetcode.com/problems/remove-linked-list-elements/
// Creating dummy node optimized the other solution where dummy node is not used
// Runtime: 100 ms, beats 31.94 % of javascript submissions
// Memory Usage: 41.4 MB

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeElements = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy;
  while (current.next != null) {
    if (current.next.val === val) current.next = current.next.next;
    else current = current.next;
  }
  return dummy.next;
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
