// LC 1344 - https://leetcode.com/problems/angle-between-hands-of-a-clock/
/* A clock is a circle, so total angle = 360 degrees,
    since there are 60 minutes in a clock , eac minute mark is 6 degrees 
    */
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  // minutes-hand position (in degrees)
  let minAngle = minutes * 6;
  // hour-hand position (in degrees)
  /* calculate hour angle by adding 
  ((actual hour mark * 5 marks * 6 degrees ) + (additional angle movement for the hour hand based on minutes * 6 degrees) ) */
  let hrAngle = hour * 5 * 6 + (minutes / 12) * 6;
  let diffAngle = Math.abs(minAngle - hrAngle);
  // As we need to find the smallest angle
  return Math.min(diffAngle, 360 - diffAngle);
  // return diffAngle > 180 ? 360 - diffAngle : diffAngle;
};

console.log(angleClock(12, 30)); // Output 165
console.log(angleClock(3, 30)); // Output 75
console.log(angleClock(3, 15)); // Output 7.5
console.log(angleClock(4, 50)); // Output 155
console.log(angleClock(12, 0)); // Output 0
