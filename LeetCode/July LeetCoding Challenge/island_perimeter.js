// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3383/
// 5833 / 5833 test cases passed ; Runtime: 412 ms ; Memory Usage: 46.7 MB
// LC 463 - https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  let rowLen = grid.length;
  let colLen = grid[0].length;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        console.log("ij = " + i + j);
        /* grid[i - 1] !== undefined will work
         * but grid[i - 1][j] !== undefined will throw error as undefined[j] can't be calculated
         */
        let a = grid[i - 1] !== undefined ? (grid[i - 1][j] === 0 ? 1 : 0) : 1;
        let b = grid[i + 1] !== undefined ? (grid[i + 1][j] === 0 ? 1 : 0) : 1;
        let c =
          grid[i][j - 1] !== undefined ? (grid[i][j - 1] === 0 ? 1 : 0) : 1;
        let d =
          grid[i][j + 1] !== undefined ? (grid[i][j + 1] === 0 ? 1 : 0) : 1;
        perimeter = perimeter + a + b + c + d;
        console.log("a + b + c + d = " + a + b + c + d);
      }
    }
  }
  return perimeter;
};

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]; // 16

let grid1 = [
  [0, 1],
  [1, 1],
]; // 16
console.log(islandPerimeter(grid));
