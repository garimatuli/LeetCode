var twoSum = function (nums, target) {
  let obj = {};
  nums.forEach((num, index) => {
    obj[num] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (typeof obj[complement] !== "undefined" && obj[complement] !== i) {
      return [i, obj[complement]];
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
