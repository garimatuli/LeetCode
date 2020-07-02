// July LeetCode Challenge  - July 1st,2020
// 1336 / 1336 test cases passed ; Runtime: 100 ms ; Memory Usage: 38.4 MB
// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3377/
// https://leetcode.com/problems/arranging-coins/
// Other Solution - https://leetcode.com/articles/arranging-coins/

var arrangeCoins = function (n) {
  let i = 0;
  let j = 0;
  if (n <= 0) return 0;
  for (j = 1; j <= n; j++) {
    i = i + j;
    n = n - j;
    if (n <= j) {
      console.log("n = " + n + " and j = " + j);
      return j;
    }
  }
};

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(6)); // 3
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(9)); // 3
console.log(arrangeCoins(10)); // 4
