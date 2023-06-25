/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let i = 0; i < operations.length; i++)
    operations[i].includes("+") ? result++ : result--;
  return result;
};
