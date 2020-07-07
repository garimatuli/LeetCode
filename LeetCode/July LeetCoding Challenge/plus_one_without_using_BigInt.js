// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3382/
// https://www.youtube.com/watch?v=_sls9AdBymI
// LC 66 - https://leetcode.com/problems/plus-one/
// Runtime: 76 ms, Memory Usage: 33.4 MB

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};

console.log(plusOne([9])); // [1,0]

let digits = [1, 2, 3];
console.log(plusOne(digits)); // [1,2,4]

let digitss = [1, 2, 9];
console.log(plusOne(digitss)); // [1,3,0]

console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]

let digits1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits1)); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
