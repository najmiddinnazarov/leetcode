/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  const res = [];
  let leftSum = 0;
  for (const num of nums) {
    res.push(Math.abs(totalSum - num - 2 * leftSum));
    leftSum += num;
  }
  return res;
};
