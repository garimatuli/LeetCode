// https://leetcode.com/problems/longest-common-prefix/

/* Approach
 * find the shortest string in the array as its length can be the maximum length of prefix
 * iterate from index 0 to prefixLength - 1
 * use above index to check the corresponding character of each string together
 * and compare them using Array.every
 * If all characters at index i match, then we add it to our prefix result string
 * As soon as we hit a mismatch, that's the end of the common prefix and we break out of our loop
 * return prefix at the end, which may be empty
 */

var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let prefix = "";

  // console.log(...strs); // spread operator spreads an array into // flower flow flight
  // console.log(...strs.map((str) => str.length)); // gives length of above // 6 4 6

  let prefixLength = Math.min(...strs.map((str) => str.length)); // min(6,4,6) = 4

  for (let i = 0; i < prefixLength; i++) {
    let char = strs[0][i]; // taking ith character of first word

    // every() method tests whether all elements in the array pass
    // the test implemented by the provided function.
    // It returns a Boolean value.

    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
