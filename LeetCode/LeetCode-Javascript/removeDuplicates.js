// remove duplicates from sorted array and display length of modified array
// Question: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// array modification in-place ; T = O(n) ; S = O(1)

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 6, 6, 9]));
console.log(removeDuplicates([0, 1, 2, 3, 4, 6, 9, 9, 9, 9, 99]));
