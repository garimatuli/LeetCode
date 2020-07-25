// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3400/
// LC 797 - https://leetcode.com/problems/all-paths-from-source-to-target/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const findPath = (current) => {
    if (graph[current].length === 0) return [[current]];
    const result = [];
    graph[current].map((next) => {
      findPath(next).map((path) => {
        result.push([current, ...path]);
      });
    });
    return result;
  };
  return findPath(0);
};
