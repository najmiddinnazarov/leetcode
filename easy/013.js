/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let temp = num;
  while (num) {
    if (temp % (num % 10) === 0) count++;
    num = parseInt(`${num / 10}`);
  }
  return count;
};
