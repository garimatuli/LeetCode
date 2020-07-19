// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3394/
// LC 210 - https://leetcode.com/problems/course-schedule-ii/
// Solution - https://leetcode.com/problems/course-schedule-ii/solution/
// Time Complexity: O(V + E); V - number of vertices, E - number of edges.
// Space Complexity: O(V+E)
// Runtime: 88 ms, faster than 78.40% of JavaScript online submissions.
// Memory Usage: 39.9 MB, less than 80.40% of JavaScript online submissions.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const order = []; // list maintaining topologically sorted order
  const queue = []; // keep a track of all the nodes in the graph with 0 in-degree.
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);
  // console.log(indegree);
  // Iterate over all the edges in the input and
  // create an adjacency list and also a map of node v/s in-degree.
  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }
  // console.log(graph);
  // console.log(indegree);
  // pushing node that doesn't have any incoming edges in queue
  // implying no prerequisite courses required
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  // processing courses/nodes with 0 in-degree.
  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      // For all the neighbors of this node v:
      for (const e of graph.get(v)) {
        // reduce their in-degree by 1
        indegree[e]--;
        // If any of the nodes' in-degree reaches 0, add it to the queue.
        if (indegree[e] === 0) queue.push(e);
      }
    }
    // Add the node v to 'order'
    order.push(v);
  }
  return numCourses === order.length ? order : [];
};

console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [ 0, 1, 2, 3 ]
console.log(
  findOrder(3, [
    [1, 2],
    [2, 3],
    [3, 1],
  ])
); // [] // as it creates a cycle so its impossible to finish all courses
