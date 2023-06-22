/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  var result = "";
  const integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  function recursive(a) {
    if (a === 0) return result;
    else {
      for (let i = 0; i < integer.length; i++) {
        if (a >= integer[i]) {
          result += roman[i];
          return recursive((a -= integer[i]));
        }
      }
    }
  }
  return recursive(num);
};
