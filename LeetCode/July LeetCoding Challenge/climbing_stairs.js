// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3407/
// LC 70 - https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */

//Runtime: 104 ms, faster than 6.80% of JavaScript online submissions
// Memory: 36.2 MB
var climbStairs = function (n) {
  let a = 0,
    b = 1,
    c = 1;
  while (n--) (c = a + b), (a = b), (b = c);
  return c;
};

// T - O(n) ; S - O(n)
// Runtime: 80 ms, faster than 28.47% of JavaScript online submissions
// Memory: 36.5 MB
var climbStairs1 = function (n) {
  if (n < 2) return 1;
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// Not good for large n - Run time Exceeds due to recursion calls!!
var climbStairs2 = function (n) {
  return n < 2 ? 1 : climbStairs2(n - 1) + climbStairs2(n - 2);
};

// T - O(n) ; S - O(1)
// Runtime: 80 ms, faster than 28.47% of JavaScript online submissions
// Memory: 36.5 MB
var climbStairs3 = function (n) {
  if (n < 2) return 1;
  let first = 1,
    second = 1,
    total = 0;
  for (let i = 2; i <= n; i++) {
    total = first + second;
    first = second;
    second = total;
  }
  return total;
};
console.log(climbStairs(2)); //2
console.log(climbStairs1(2)); //2
console.log(climbStairs2(2)); //2
console.log(climbStairs3(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs1(3)); //3
console.log(climbStairs2(3)); //3
console.log(climbStairs3(3)); //3
console.log(climbStairs(45)); //1836311903
console.log(climbStairs1(45)); //1836311903
// console.log(climbStairs2(45)); //Error -> Runtime Exceeded
console.log(climbStairs3(45)); //1836311903
