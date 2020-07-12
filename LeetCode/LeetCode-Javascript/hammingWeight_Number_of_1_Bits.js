// LC 191 - https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) count++;
    n = n >> 1; //right shift by 1 bit, rightmost bit falls off, 0 added to leftmost bit
  }
  return count;
};

var hammingWeight1 = function (n) {
  let count = 0;
  while (n > 0) {
    if (n % 2) count++;
    n = parseInt(n / 2);
  }
  return count;
};

var hammingWeight2 = function (n) {
  return n.toString(2).replace(/[0]/g, "").length;
};

console.log(hammingWeight(11)); // 00000000000000000000000000001011
// Output: 3
// console.log(hammingWeight(11111111111111111111111111111101)); //Output: 31

console.log(hammingWeight1(11));
console.log(hammingWeight2(11));
