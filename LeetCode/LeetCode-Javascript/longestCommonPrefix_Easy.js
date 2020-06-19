// https://leetcode.com/problems/longest-common-prefix/

// sort input ; compare first & last word character by character

var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";

  //   console.log(strs); // [ 'flower', 'flow', 'flight' ]

  let sortedArr = strs.sort(); // sort array of strings

  //   console.log(sortedArr); [ 'flight', 'flow', 'flower' ]

  let firstStr = sortedArr[0],
    lastStr = sortedArr[sortedArr.length - 1];
  let prefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== lastStr[i]) {
      return prefix;
    }
    prefix = prefix + firstStr[i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
