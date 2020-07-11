// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3387/
// LC 78 - https://leetcode.com/problems/subsets/
// https://leetcode.com/articles/subsets/
// Runtime: 72 ms, faster than 68.89% of JavaScript online submissions for Subsets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let powerSet = [[]];
  for (let i = 0; i < nums.length; i++) {
    let len = powerSet.length;
    for (let j = 0; j < len; j++) {
      //console.log(powerSet);
      powerSet.push([...powerSet[j], nums[i]]);
      //console.log([...powerSet[j], nums[i]]);
    }
  }
  return powerSet;
};

nums = [1, 2, 3]; // Output:[[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
console.log(subsets(nums));
console.log(subsets([])); //Outpt: [[]]
console.log(subsets([0])); //Outpt: [[],[0]]
console.log(subsets([1, 2])); //Output: [[],[1],[2],[1,2]]
console.log(subsets([0, 0, 0])); //Output: [[],[0],[0],[0,0],[0],[0,0],[0,0],[0,0,0]]
console.log(subsets([1, 2, 3, 4]));
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4]]
console.log(subsets([0, 0, 0, 0]));
// Output: [[],[0],[0],[0,0],[0],[0,0],[0,0],[0,0,0],[0],[0,0],[0,0],[0,0,0],[0,0],[0,0,0],[0,0,0],[0,0,0,0]]
