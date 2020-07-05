// https://leetcode.com/problems/ugly-number/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false;

  var primeFactor = [];

  while (num % 2 == 0) {
    primeFactor.push(2);
    num = num / 2;
  }

  var sqrtNum = Math.floor(Math.sqrt(num));

  for (var i = 3; i <= sqrtNum; i++) {
    while (num % i == 0) {
      primeFactor.push(i);
      num = num / i;
    }
  }

  if (num > 2) primeFactor.push(num);

  for (var i = 0; i < primeFactor.length; i++) {
    if (primeFactor[i] > 5) return false;
  }

  return true;
};

console.log(isUgly(32)); // true
console.log(isUgly(88)); // false
