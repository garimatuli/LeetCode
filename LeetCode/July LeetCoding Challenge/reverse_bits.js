// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3388/
// Runtime: 84 ms, faster than 59.34% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 37.7 MB, less than 16.28% of JavaScript online submissions for Reverse Bits.
// LC 190 - https://leetcode.com/problems/reverse-bits/
// Solution: https://leetcode.com/articles/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  console.log(n);
  let res = 0;
  let index = 31;
  while (n > 0) {
    if (n % 2 != 0) {
      res += Math.pow(2, index);
      console.log(index);
      console.log(res);
    }
    n = Math.floor(n / 2);
    index--;
  }
  return res;
};
console.log(reverseBits(43261596)); // 00000010100101000001111010011100
// Output: 964176192 (00111001011110000010100101000000)
