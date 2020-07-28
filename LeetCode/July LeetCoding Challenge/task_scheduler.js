// https://leetcode.com/explore/featured/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3404/
// LC 621 - https://leetcode.com/problems/task-scheduler/
// Time Complexity O(n) & Space Complexity O(1)

var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;
  let map = {};
  // find the count of frequently repeated characters
  for (let task of tasks) {
    map[task] = map[task] ? map[task] + 1 : 1;
  }
  let max = 0; // task max frequency
  for (let task in map) {
    max = Math.max(max, map[task]); //set max value with map[task] only if we have a new max
  }

  let count = 0; // the number of tasks with same max frequency
  for (let task in map) {
    if (map[task] === max) {
      count++;
    }
  }
  return Math.max((max - 1) * (n + 1) + count, tasks.length);
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); //8

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); //6

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
); //16

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 1)
); //12
