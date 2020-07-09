// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3384/
// LC 15 - https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length;
  if (len === 0 || len < 3) return [];
  let check_zeroes = nums.every((el) => el === 0);
  if (check_zeroes) return [[0, 0, 0]];
  // sort() method will produce incorrect result when sorting numbers.
  // You can fix this by providing a compare function in sort()
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    else {
      let left = i + 1;
      let right = len - 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1] && left <= right) left++;
          left++;
          while (nums[right] === nums[right - 1] && left <= right) right--;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1])); // [[-1,0,1]]
console.log(threeSum([1, -1, -1, 0])); // [[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); // [[-2,0,2]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]
