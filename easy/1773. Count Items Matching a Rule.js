/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let key = ["type", "color", "name"];
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][key.indexOf(ruleKey)] === ruleValue) result += 1;
  }
  return result;
};
