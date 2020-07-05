// Leet code challenge - Day 4
// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3380/
// LC 264 - https://leetcode.com/problems/ugly-number-ii/

/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
  if (n <= 0) return 0;

  if (n <= 6) return n;

  let p2 = 0,
    p3 = 0,
    p5 = 0; //pointers for 2, 3, 5

  let k = []; // for storing ugly numbers
  k[0] = 1;

  for (let i = 1; i < n; i++) {
    k[i] = Math.min(k[p2] * 2, Math.min(k[p3] * 3, k[p5] * 5));

    if (k[i] == k[p2] * 2) p2++;
    if (k[i] == k[p3] * 3) p3++;
    if (k[i] == k[p5] * 5) p5++;
  }

  return k[n - 1];
};

console.log(nthUglyNumber(5)); // 5
console.log(nthUglyNumber(10)); // 12
