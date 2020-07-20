// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/
// LC 67 - https://leetcode.com/problems/add-binary/
// Runtime: 88 ms, faster than 41.50% of JavaScript online submissions
// Memory Usage: 38.8 MB

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let len = Math.max(a.length, b.length);
  let carry = 0;
  let result = [];
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
    // if carry then sum > 1
    // case when we get carry, example 1+1+0 = 0,carry = 1 ; 1+1+1 = 1,carry = 1
    if (sum > 1 && sum % 2 == 0) {
      carry = 1;
      result.push(0); // if sum % 2 == 0 then we have even no. of 1's, example 1 + 1 = 0
    } else if (sum > 1 && sum % 2 != 0) {
      carry = 1;
      result.push(1); // if sum % 2 != 0 then we have odd no. of 1's, example 1 + 1 + 1 = 1
    } else {
      // case when no carry , example 0+0+0 = 0, 1+0+0 = 1
      result.push(a[i] | b[i] | carry);
      carry = 0;
    }
  }
  if (carry) result.push(1);
  //console.log("result = ", result);
  // console.log(result.reverse());
  // console.log(result.reverse().join(""));
  return result.reverse().join("");
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("0000", "00")); // Output: "0000"
console.log(addBinary("11", "11")); // Output: "110"
console.log(addBinary("111", "111")); // Output: "1110"
