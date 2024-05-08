// 1281. Subtract the Product and Sum of Digits of an Integer
// Difficulty: 🟢 Easy

/* 
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

// Examples:
// Example 1:
/* 
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/

// Example 2:
/* 
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

// Constraints:
/*
 * 1 <= n <= 10^5
 */

// Solutions

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let a = 0;
  let b = 1;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    a += +n[i];
    b *= n[i];
  }
  return b - a;
};
