// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3392/
// LC 50 - https://leetcode.com/problems/powx-n/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0 || x == 1) return 1.0;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (x == -1) {
    if (n % 2 == 0) return 1.0;
    else return -1.0;
  }
  let result = 1;
  let len = parseInt(n / 2);
  for (let i = 1; i <= len; i++) {
    result = result * x;
  }
  if (n % 2 === 0) result = result * result;
  else result = result * result * x;
  return result.toFixed(5);
};

console.log(myPow(2.0, 10)); // Output: 1024.00000
console.log(myPow(2.1, 3)); // Output: 9.26100
console.log(myPow(2.0, -2)); // Output: 0.25000
// Explanation: myPow(2,-2) = 1/myPow(2,2) = 1/4 = 0.25
console.log(myPow(2.0, -2147483648)); // Output: 0.00000
console.log(myPow(2.0, 0)); // Output: 1.00000
console.log(myPow(1.0, 2147483647)); // Output: 1.00000
console.log(myPow(-1.0, -2147483648)); // Output: 1.00000
console.log(myPow(-1.0, -2147483647)); // Output: -1.00000
