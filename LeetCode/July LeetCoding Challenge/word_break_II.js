// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3406/
// LC 140 - https://leetcode.com/problems/word-break-ii/
// Solution Explaination: https://www.youtube.com/watch?v=3ao_ms-bT9M
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let res = helper(s, wordDict, 0, []);

  let result = [];

  for (let i = 0; i < res.length; i++) {
    result.push(res[i].join(" "));
  }

  return result;
};

function helper(s, wordDict, start, memo) {
  if (start === s.length) return [[]];

  if (memo[start] != undefined) return memo[start];

  let result = [];
  for (let i = start + 1; i <= s.length; i++) {
    let subString = s.substring(start, i);
    if (wordDict.includes(subString)) {
      let next = helper(s, wordDict, i, memo);
      for (let d of next) {
        result.push([subString, ...d]);
      }
    }
  }

  return (memo[start] = result);
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); // [ 'cat sand dog', 'cats and dog' ]
console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
); /* [ 'pine apple pen apple',
'pine applepen apple',
'pineapple pen apple' ] */
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // []
