// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3393/
// https://leetcode.com/problems/top-k-frequent-elements/
// Solution - https://leetcode.com/articles/top-k-frequent-elements/
// Runtime: 80 ms, faster than 84.84% of JavaScript online submissions
// Memory Usage: 40 MB, less than 30.34% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // O(1) time
  if (k === nums.length) return nums;
  // builds a map to keep track of value counts
  let myMap = new Map();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    } else myMap.set(nums[i], 1);
  }
  console.log(myMap);
  //  uses ES6 spread syntax to create an array out of the map
  arr = [...myMap.entries()];
  console.log(arr);
  // sort descending according to elements in arr[1] ie counter values
  arr = arr.sort((a, b) => b[1] - a[1]);
  console.log(arr);
  // return the first k elements from array
  let final_arr = [];
  for (let i = 0; i <= k - 1; i++) {
    final_arr.push(arr[i][0]);
  }
  return final_arr;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //Output: [1,2]
console.log(topKFrequent([1], 1)); //Output: [1]
