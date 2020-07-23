// LC 136 - https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using Sort
// time O(n) & space O(1)
// Runtime: 152 ms,Memory Usage: 38.6 MB
var singleNumber = function (nums) {
  nums = nums.sort((val1, val2) => {
    return val1 - val2;
  });
  //console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) return nums[i];
  }
};

//Using Map
// time O(n) & space O(n)
// Runtime: 136 ms ; Memory Usage: 40.6 MB
var singleNumber1 = function (nums) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      myMap.delete(nums[i]);
    } else myMap.set(nums[i], 1);
  }
  for (let key of myMap.keys()) {
    return key;
  }
};
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber1([2, 2, 1])); // 1
console.log(singleNumber1([4, 1, 2, 1, 2])); // 4
