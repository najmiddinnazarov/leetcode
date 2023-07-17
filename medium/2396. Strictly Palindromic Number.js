/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  return [2, 3, 4, 5, 6, 7]
    .map((vl) => n.toString(vl) === n.toString(vl).split("").reverse().join(""))
    .every((value) => value);
};
console.log(isStrictlyPalindromic(9));
