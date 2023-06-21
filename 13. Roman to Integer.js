/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += roman[s[i]];
  }
  if (s.includes("IV") || s.includes("IX")) result -= 2;
  if (s.includes("XL") || s.includes("XC")) result -= 20;
  if (s.includes("CD") || s.includes("CM")) result -= 200;
  return result;
};
