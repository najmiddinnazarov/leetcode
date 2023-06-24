/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  const min = 1;
  const max = 2 * (n - 1) + 1;
  const minimum = (min + max) / 2;
  let result = 0;
  for (let i = 0; i < n / 2; i++) result += minimum - (2 * i + 1);
  return result;
};
