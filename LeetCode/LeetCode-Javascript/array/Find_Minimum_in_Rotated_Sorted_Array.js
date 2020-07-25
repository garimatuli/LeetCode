//  LC 153 - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solution/
/**
 * @param {number[]} nums
 * @return {number}
 */

//One Liner using Spread Operator - Runtime 124ms
//O(n)
var findMin = function (nums) {
  return Math.min(...nums);
};

//Using Binary Search - Runtime 84ms
// O(log(n))
var findMin1 = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[right]) break; // array is sorted,nums[left] is the minimum
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};
// Using Extra Memory - Runtime 80ms
// O(n)
var findMin2 = function (nums) {
  if (nums.length === 1) return nums;
  let arr = nums.concat(nums);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return arr[i + 1];
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2])); //1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); //0

console.log(findMin1([3, 4, 5, 1, 2])); //1
console.log(findMin1([4, 5, 6, 7, 0, 1, 2])); //0

console.log(findMin2([3, 4, 5, 1, 2])); //1
console.log(findMin2([4, 5, 6, 7, 0, 1, 2])); //0
