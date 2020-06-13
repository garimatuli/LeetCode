// Question : https://leetcode.com/problems/two-sum/
// Time Complexity = O(n)
// Like One pass Hash Table in Java
// Maintaining a mapping of each element in the array to its index

var twoSum = function (nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([7, 3, 2, 3], 6));
