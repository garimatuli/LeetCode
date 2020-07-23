// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3399/
// LC 260 - https://leetcode.com/problems/single-number-iii/
// Runtime: 72 ms ,runtime beats 82.96 % of javascript submissions.; Memory Usage: 38.9 MB
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let myMap = new Map();
  let count = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    } else myMap.set(nums[i], 1);
  }
  myMap.forEach((v, k) => {
    if (v === 1) {
      count++;
      result.push(k);
    } else if (v > 2) return [];
  });
  if (count === 2) return result;
  else return [];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // Output [3,5]
