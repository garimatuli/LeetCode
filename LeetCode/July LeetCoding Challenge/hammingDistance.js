// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3381/
// 149 / 149 test cases passed ; Status: Accepted ; Runtime: 76 ms
// LC 461 - https://leetcode.com/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  console.log("x = " + x);
  console.log("y = " + y);
  function binary(num) {
    let binary = [];
    while (num > 1) {
      console.log(" num = " + num);
      binary.push(num % 2);
      console.log(" num after push num%2 = " + num);
      num = Math.floor(num / 2);
      console.log(" num after num/2 = " + num);
    }
    binary.push(num % 2);
    return binary.reverse();
  }

  let x_binary = binary(x);
  let y_binary = binary(y);

  console.log("x binary = " + x_binary);
  console.log("y binary = " + y_binary);

  let len_x = x_binary.length;
  let len_y = y_binary.length;
  console.log("x length = " + len_x);
  console.log("y length = " + len_y);

  if (len_x != len_y) {
    len_x < len_y ? append_x() : append_y();
  }

  function append_x() {
    for (let i = len_x; i < len_y; i++) x_binary.unshift(0);
  }

  function append_y() {
    for (let j = len_y; j < len_x; j++) y_binary.unshift(0);
  }

  len_x = x_binary.length;
  len_y = y_binary.length;

  console.log("x binary = " + x_binary);
  console.log("y binary = " + y_binary);
  console.log("x length = " + len_x);
  console.log("y length = " + len_y);
  let count = 0;
  for (let k = 0; k < len_x; k++) {
    if (x_binary[k] != y_binary[k]) count++;
  }
  return count;
};

console.log(hammingDistance(1, 4)); // 2
// console.log(hammingDistance(4, 1)); // 2
console.log(hammingDistance(93, 73)); // 2
// console.log(hammingDistance(73, 93)); // 2
