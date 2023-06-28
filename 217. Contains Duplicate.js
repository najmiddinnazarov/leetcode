/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return (
    nums.filter((value, index) => nums.indexOf(value) !== index).length >= 1
  );
};
