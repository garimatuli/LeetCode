// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3397/
// LC 79 - https://leetcode.com/problems/word-search/
// Runtime: 92 ms, faster than 81.10% of JavaScript online submissions for Word Search
// Memory Usage: 38.9 MB, less than 64.17% of JavaScript online submissions for Word Search.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // Initial validation
  if (board.length === 0) return false;
  if (word.length === 0) return false;
  // visit all cells one by one
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  function dfs(r, c, index) {
    if (index >= word.length) return true;
    // if cell is not within the board, stop exploring further
    if (r < 0 || c < 0 || r > board.length - 1 || c > board[r].length - 1)
      return false;
    if (board[r][c] !== word[index]) return false;
    if (board[r][c] === "@") return false;
    board[r][c] = "@"; // mark as visited
    // Flag to track if found in any - by exploring all 4 directions
    let found =
      dfs(r, c - 1, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r + 1, c, index + 1);
    board[r][c] = word[index]; // reset from visited marking back to the original character
    return found; // true or false
  }
  return false;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let board1 = [
  ["a", "b"],
  ["c", "d"],
];

let board2 = [
  ["F", "Y", "C", "E", "N", "R", "D"],
  ["K", "L", "N", "F", "I", "N", "U"],
  ["A", "A", "A", "R", "A", "H", "R"],
  ["N", "D", "K", "L", "P", "N", "E"],
  ["A", "L", "A", "N", "S", "A", "P"],
  ["O", "O", "G", "O", "T", "P", "N"],
  ["H", "P", "O", "L", "A", "N", "O"],
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false
console.log(exist(board1, "abcd")); // false
console.log(exist(board1, "abdc")); // true
console.log(exist(["a"], "a")); // true
console.log(exist(board2, "CHINA")); // false
console.log(exist(board2, "CNFRAPL")); // true
