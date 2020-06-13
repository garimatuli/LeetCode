// "use strict";
(function () {
  var a = (b = 3);
})();

console.log(typeof a);
console.log("a defined? " + (typeof a !== "undefined"));
console.log(typeof b); // Because a variable b = 3 is formed at global level
console.log("b defined? " + (typeof b !== "undefined"));

console.log(this);
