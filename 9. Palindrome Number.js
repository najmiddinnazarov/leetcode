/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return `${x}`.split("").reverse().join("") == `${x}`;
};
