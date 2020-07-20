// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/
// LC 67 - https://leetcode.com/problems/add-binary/
// Runtime: 108 ms;  Memory Usage: 39.2 MB

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let len = Math.max(a.length, b.length);
  let carry = 0;
  let str = ""; // let result = [];
  // converting strings to arrays & reversing arrays
  a = [...a].reverse();
  b = [...b].reverse();
  // adding zeroes's to make array lengths equal
  for (let i = 0; i < len; i++) {
    a[i] = a[i] ? a[i] : 0;
    b[i] = b[i] ? b[i] : 0;
  }
  // iterating over arrays and adding bits + any carry
  for (let i = 0; i < len; i++) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 2);
    str = (sum % 2) + str; //result.push(sum % 2);
  }
  if (carry) str = carry + str; //result.push(1);
  return str; //return result.reverse().join("");
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("0000", "00")); // Output: "0000"
console.log(addBinary("11", "11")); // Output: "110"
console.log(addBinary("111", "111")); // Output: "1110"
