// 2621. Sleep
// Difficulty: 🟢 Easy

/* 
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
*/

// Examples:
// Example 1:
/* 
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
*/

// Example 2:
/* 
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/

// Constraints:
/*
 * 1 <= millis <= 1000
 */

// Solutions

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  let t = Date.now();
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Date.now() - t), millis);
  });
  return await promise;
}
