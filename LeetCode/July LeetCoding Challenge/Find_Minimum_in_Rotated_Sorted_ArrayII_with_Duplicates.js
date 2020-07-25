// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3401/
//  LC 154 - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

//One Liner using Spread Operator
// Runtime: 72 ms, faster than 71.94% of JavaScript online submissions
// time complexity: O(n)
var findMin = function (nums) {
  return Math.min(...nums);
};

// Using Binary Search
// Runtime: 68 ms, faster than 86.69%,Memory - 37.3 MB
// time complexity: O(log(n))
var findMin1 = function (nums) {
  let left = 0,
    right = nums.length - 1,
    mid = 0;
  while (left < right) {
    while (nums[left] === nums[right]) {
      right--;
    }
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

// Runtime: 92 ms faster than 21.22%, Memory - 37.3 MB
// Using Extra Memory
// time complexity: O(n)
var findMin2 = function (nums) {
  if (nums.length === 1) return nums[0]; // for cases like [1]
  let arr = nums.concat(nums);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return arr[i + 1];
  }
  return arr[0]; // for cases when all duplicate like [1,1,1]
};

console.log(findMin([3, 4, 5, 1, 2])); //1
console.log(findMin([2, 2, 2, 0, 1])); //0
console.log(findMin([1, 1])); // 1
console.log(findMin([1])); // 1

console.log(findMin1([3, 4, 5, 1, 2])); //1
console.log(findMin1([2, 2, 2, 0, 1])); //0
console.log(findMin1([1, 1])); // 1
console.log(findMin1([1])); // 1
console.log(findMin1([3, 3, 1, 3])); //1

console.log(findMin2([3, 4, 5, 1, 2])); //1
console.log(findMin2([2, 2, 2, 0, 1])); //0
console.log(findMin2([1, 1])); // 1
console.log(findMin2([1])); // 1
