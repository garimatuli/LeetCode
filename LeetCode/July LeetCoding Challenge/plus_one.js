// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3382/
// https://www.youtube.com/watch?v=_sls9AdBymI
// LC 66 - https://leetcode.com/problems/plus-one/
// 109 / 109 test cases passed ; Runtime: 104 ms ; Memory Usage: 33.6 MB

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let str = "";
  for (let i = 0; i < digits.length; i++) {
    str = str + digits[i];
  }
  // let str = digits.join("");
  let num = 0;
  num = BigInt(str) + 1n;

  let result = String(num);

  let arr = [];
  for (let j = 0; j < result.length; j++) {
    arr.push(+result[j]);
  }
  return arr;

  // let arr = result.split("").map((el) => +el);
  // return arr;
};

let digits = [1, 2, 3];
console.log(plusOne(digits)); // [3,2,1]

console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]

let digits1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits1)); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
