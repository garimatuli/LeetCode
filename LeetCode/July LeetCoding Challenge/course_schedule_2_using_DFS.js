// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3394/
// LC 210 - https://leetcode.com/problems/course-schedule-ii/
// Solution - https://leetcode.com/problems/course-schedule-ii/solution/
// Time Complexity: O(N) considering there are N courses in all.
// Space Complexity: O(N), the space utilized by the recursion stack
// Runtime: 136 ms faster than 24.10% of JavaScript online submissions
// (Takes longer than using Node Indegree Method - Runtime: 88 ms)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let color = [];
  let possible = true;
  let topologicalOrder = [];
  // Build a graph
  // A pair [u, v] in the input represents edge from v --> u
  for (let [u, v] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(u);
    } else {
      graph.set(v, [u]);
    }
  }
  // console.log(graph)
  // By default all vertices are WHITE
  for (let i = 0; i < numCourses; i++) {
    color[i] = "white"; // white denotes an unvisited node
  }

  for (let i = 0; i < numCourses; i++) {
    // If the node is unprocessed, then call dfs on it.
    if (color[i] === "white") {
      dfs(i);
    }
  }

  // dfs
  function dfs(node) {
    // Don't recurse further if we found a cycle already
    if (!possible) return;
    // Start the recursion
    color[node] = "gray"; // gray denotes a node being visited
    // Traverse on neighboring vertices
    let neighbors = graph.has(node) ? graph.get(node) : [];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (color[neighbor] === "white") {
        dfs(neighbor);
      } else if (color[neighbor] === "gray") {
        // An edge to a GRAY vertex represents a cycle
        possible = false;
      }
    }
    // Recursion ends. We mark it as black
    color[node] = "black"; // black denotes a node who has been visited
    topologicalOrder.push(node);
  }

  if (possible) return topologicalOrder.reverse();
  else return []; // we found a cycle
};

console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [ 0, 2, 1, 3 ]
console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ])
); // []
