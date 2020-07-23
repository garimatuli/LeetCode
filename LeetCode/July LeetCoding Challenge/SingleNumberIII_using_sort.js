// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3399/
// LC 260 - https://leetcode.com/problems/single-number-iii/
// Runtime: 92 ms , Memory Usage: 39.6 MB
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let result = [];
  if (nums.length == 2) {
    return nums;
  }
  nums = nums.sort((val1, val2) => {
    return val1 - val2;
  });
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
      result.push(nums[i]);
    }
  }
  if (result.length == 2) {
    return result;
  }
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // Output [3,5]
