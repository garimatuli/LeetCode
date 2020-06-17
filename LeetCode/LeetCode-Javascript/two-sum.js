// Question : https://leetcode.com/problems/two-sum/
// Time Complexity = O(n)

let obj = {};
var twoSum = function (nums, target) {
  let complement = 0;
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in obj) {
      return [obj[nums[i]], i];
    }
    obj[nums[i]] = i;
    console.log(obj);
  }
};
console.log(twoSum([7, 3, 2, 3], 6));
