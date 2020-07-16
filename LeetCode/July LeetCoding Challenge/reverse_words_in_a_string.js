// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3391/
// LC 151 - https://leetcode.com/problems/reverse-words-in-a-string/

// Runtime: 60 ms ; Memory Usage: 34.5 MB

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let wordArr = s.split(" ");
  let revStr = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (wordArr[i] !== "") {
      revStr += wordArr[i] + " ";
    }
  }
  return revStr.trim(); // to trim the last space character appended to the string
};

console.log(reverseWords("")); //
console.log(reverseWords("     ")); //
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world!  ")); // "world! hello"
console.log(reverseWords("a good   example")); // "example good a"

// OR

var reverseWords_1 = function (s) {
  let revStr = s
    .split(" ")
    .filter((word) => word.length)
    .reverse()
    .join(" ");
  return revStr;
};

console.log(reverseWords_1("")); //
console.log(reverseWords_1("     ")); //
console.log(reverseWords_1("the sky is blue")); // "blue is sky the"
console.log(reverseWords_1("  hello world!  ")); // "world! hello"
console.log(reverseWords_1("a good   example")); // "example good a"
