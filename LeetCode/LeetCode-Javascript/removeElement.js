// remove all occurrences of an element from sorted array and display length of modified array
// Question: https://leetcode.com/problems/remove-element/solution/

// array modification in-place ; T = O(n) ; S = O(1)

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeElement([0, 1, 1, 1, 6, 6, 9], 1));
console.log(removeElement([9, 9, 9, 9, 99], 9));
console.log(removeElement([9, 9, 9, 9], 9));
