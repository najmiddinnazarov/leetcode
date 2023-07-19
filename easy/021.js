/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map((value) => value + extraCandies >= Math.max(...candies));
};
