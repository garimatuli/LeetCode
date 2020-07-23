// LC 136 - https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */

/* Perform xor with each number of nums. Only the single digit will not 
"cancel" itself out, for all other numbers n ^ n = 0 */
// Runtime: 84 ms ; Memory Usage: 39.3 MB
// Time O(n) , Space O(1)
var singleNumber = function (nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
};
//OR
// Runtime: 104 ms; Memory Usage: 37.3 MB
var singleNumber1 = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4

console.log(singleNumber1([2, 2, 1])); // 1
console.log(singleNumber1([4, 1, 2, 1, 2])); // 4
