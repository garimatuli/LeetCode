// Question: https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let xrev = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  // console.log("Number = " + x);
  // console.log("Reverse = " + xrev);
  return xrev > Math.pow(2, 31) - 1 ? 0 : x > 0 ? xrev : xrev * -1;
};

console.log(reverse(123456789));
console.log(reverse(-123456789));
