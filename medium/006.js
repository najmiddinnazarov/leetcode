/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const reverseNumber = nums.map(
    (number) => +[...number.toString()].reverse().join("") * 1
  );
  const sortedNumber = [...nums, ...reverseNumber].sort((a, b) => a - b);
  return [...new Set(sortedNumber)].length;
};
console.log(countDistinctIntegers([1, 13, 10, 12, 31]));
