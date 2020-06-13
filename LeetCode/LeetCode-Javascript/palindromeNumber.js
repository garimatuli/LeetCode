// Question: https://leetcode.com/problems/palindrome-number/

// Solving by converting the integer to a string

// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  return x === Number(x.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
console.log(isPalindrome(1212));
