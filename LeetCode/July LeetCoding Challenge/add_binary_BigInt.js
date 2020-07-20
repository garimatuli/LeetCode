// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/
// LC 67 - https://leetcode.com/problems/add-binary/
// Runtime: 76 ms, beats 80.28 % of javascript submissions;
// Memory Usage: 37.3 MB, beats 55.40 % of javascript submissions

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // ES6 binary literals using the 0b prefix followed by a sequence of binary numbers
  // Converting binary to BigInt
  let decimalA = BigInt(`0b${a}`);
  let decimalB = BigInt(`0b${b}`);
  let sum = decimalA + decimalB;
  // number.toString(radix) converts a number to a string & radix 2 shows the number as a binary value
  let binarySum = sum.toString(2);
  return binarySum;
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("0000", "00")); // Output: 0
console.log(addBinary("11", "11")); // Output: "110"
console.log(addBinary("111", "111")); // Output: "1110"
