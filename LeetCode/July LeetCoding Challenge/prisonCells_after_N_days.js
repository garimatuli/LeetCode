// Leet Code July Challenge - July 3, 2020
// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3379/
// 258 / 258 test cases passed ; Runtime: 84 ms ; Memory Usage: 36.1 MB
// LC 957 - https://leetcode.com/problems/prison-cells-after-n-days/

var prisonAfterNDays = function (cells, N) {
  /* This has to be done for larger N,
   * otherwise the result will exceed the time limit and fail.
   * Example if N = 1000000000, program will loop from 1 to N (1000000000) and fail.
   * If you observe, results starts repeating after N = 14,
   * result for N = 15 is same as result for N = 1;
   * result for N = 16 is same as result for N = 2;
   * and so on....
   */
  const remainder = N % 14;
  N = remainder === 0 ? 14 : N % 14;

  /* Don't just do let copy = cells otherwise copy would just be the reference to cells
   * and not the actual separate copy & in that case when you change copy, it will modify the original array too
   */
  let copy = [...cells];
  let tempResult = [...cells];

  for (let i = 1; i <= N; i++) {
    if (i == 1) {
      tempResult[0] = 0;
      tempResult[7] = 0;
    }

    for (let j = 1; j <= 6; j++) {
      //console.log(copy[j - 1] + " && " + copy[j + 1]);
      if (
        (copy[j - 1] == 0 && copy[j + 1] == 0) ||
        (copy[j - 1] == 1 && copy[j + 1] == 1)
      )
        tempResult[j] = 1;
      else if (
        (copy[j - 1] == 0 && copy[j + 1] == 1) ||
        (copy[j - 1] == 1 && copy[j + 1] == 0)
      )
        tempResult[j] = 0;
      else tempResult[j] = copy[j];
    }
    copy = [...tempResult];
  }
  return copy;
};

let cells = [0, 1, 0, 1, 1, 0, 0, 1];
let N = 7;
console.log(prisonAfterNDays(cells, N)); // [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)); // [0,0,1,1,1,1,1,0]
