// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3405/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// Explaination of state machine diagram at https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/602694/Javascript-DP-with-state-machine-T%3A-O(N)-S%3AO(1)
// OR https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/397437/JavaScript-version-of-state-machine-method
// Time: O(N); Space: O(1);
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }
  let sold = 0;
  let hold = -Infinity;
  let rest = 0;
  for (let p of prices) {
    hold = Math.max(hold, rest - p);
    rest = Math.max(rest, sold);
    sold = hold + p;
  }
  return Math.max(sold, rest);
};
console.log(maxProfit([1, 2, 3, 0, 2])); //3
