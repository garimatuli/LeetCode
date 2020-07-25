// Question: https://leetcode.com/problems/palindrome-number/

// Solving without converting the integer to a string

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reverse = 0;
  let num = x;

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    // using ~~x is equivalent to Math.floor(x) operation Example ~~12.25 = 12
    num = ~~(num / 10); // num = parseInt(num/10);
  }

  return x === reverse;
};
