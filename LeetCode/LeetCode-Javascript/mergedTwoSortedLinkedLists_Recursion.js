// Question: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  // if any of the list is null, return the other which is not null
  if (!l1 || !l2) return l1 ? l1 : l2;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

let current = mergeTwoLists(l1, l2);

// traverse resulting linked list
let arr = [];
while (current !== null) {
  //console.log(current.val);
  arr.push(current.val);
  current = current.next;
}
console.log(arr);
