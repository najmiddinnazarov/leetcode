/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let arr = [];
  for (let i = 0; arr.length < n; i++) arr.push(start + 2 * i);
  return eval(arr.join("^"));
};
