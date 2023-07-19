/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;
  for (let i = 0; i < accounts.length; i++) {
    let count = eval(accounts[i].join("+"));
    if (result < count) result = count;
  }
  return result;
};
