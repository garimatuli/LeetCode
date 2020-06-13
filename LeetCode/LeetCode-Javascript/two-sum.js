// Question : https://leetcode.com/problems/two-sum/
// Time Complexity = O(n)

let complObj = {};
var twoSum = function (nums, target) {
  let complement = 0;
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in complObj) {
      return [complObj[nums[i]], i];
    }
    complObj[nums[i]] = i;
    console.log(complObj);
  }
};
console.log(twoSum([7, 3, 2, 3], 6));
