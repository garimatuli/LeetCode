// Question: https://leetcode.com/problems/palindrome-number/

// Determine whether a string is a palindrome.
// A string is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  return x === x.split("").reverse().join("");
};

console.log(isPalindrome("abba"));
console.log(isPalindrome("aba"));
