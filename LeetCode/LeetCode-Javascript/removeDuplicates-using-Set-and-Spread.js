// remove duplicates from sorted array
// Spread and Set

var removeDuplicates = function (nums) {
  return [...new Set(nums)];
};

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 6, 6, 9]));
console.log(removeDuplicates([0, 1, 2, 3, 4, 6, 9, 9, 9, 9, 99]));
