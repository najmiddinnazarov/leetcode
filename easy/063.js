// 1748. Sum of Unique Elements
// Difficulty: 🟢 Easy

/* 
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.
*/

// Examples:
// Example 1:
/* 
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
*/

// Example 2:
/* 
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
*/

// Example 3:
/* 
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/

// Constraints:
/*
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */

// Solutions

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let dublicateArray = [];
  let dublicateObject = {};
  let sum = 0;
  for (const key in nums) {
    if (nums[key] in dublicateObject) {
      dublicateObject[nums[key]]++;
    } else {
      dublicateObject[nums[key]] = 1;
    }
  }
  for (const key in dublicateObject) {
    if (dublicateObject[key] > 1) {
      dublicateArray.push(+key);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (!dublicateArray.includes(nums[i])) {
      sum += nums[i];
    }
  }
  return sum;
};
