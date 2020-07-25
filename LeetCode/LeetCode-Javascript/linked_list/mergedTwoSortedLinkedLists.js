// Question: https://leetcode.com/problems/merge-two-sorted-lists/

// https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

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
  let list = new ListNode();
  let head = list;
  // console.log("head : " + head.val);

  while (l1 !== null && l2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
    //  console.log("list : " + list.val);
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  //   // return .next because this first element in the linkedlist is empty
  return head.next; // output for leet code window
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

let current = mergeTwoLists(l1, l2);
// mergeTwoLists(l1, l2);

// traverse resulting linked list
let arr = [];
while (current !== null) {
  //console.log(current.val);
  arr.push(current.val);
  current = current.next;
}
console.log(arr);
