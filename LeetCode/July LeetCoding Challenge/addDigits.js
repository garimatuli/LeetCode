// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3402/
// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
// Runtime: 92 ms , Your runtime beats 57.78 % of javascript submissions; Memory Usage: 38.1 MB
var addDigits = function (num) {
  if (num < 10) return num;
  else if (num % 9 == 0) return 9;
  else return num % 9;
};
// Runtime: 100 ms , Your runtime beats 36.46 % of javascript submissions; Memory Usage: 38.4 MB
var addDigits1 = function (num) {
  do {
    num = Math.floor(num / 10) + (num % 10);
  } while (num >= 10);
  return num;
};

console.log(addDigits(80)); //8
console.log(addDigits1(80)); //8
console.log(addDigits(81)); //9
console.log(addDigits1(81)); //9
console.log(addDigits(82)); //1
console.log(addDigits1(82)); //1
