/* 1641. Count Sorted Vowel Strings

Difficulty: 🟡 Medium

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and *are lexicographically sorted. A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet. 

Constraints:
1 <= n <= 50

*/

/**
 * @param {number} n
 * @return {number}
 */

// Solutions

var countVowelStrings = function (n) {
  const base = { 0: [0], 1: [5], 2: [1, 2, 3, 4, 5] };
  function count(k) {
    if (k in base) {
      return base[k];
    }
    let prev = count(k - 1);
    for (let i = 1; i < prev.length; i++) {
      prev[i] = prev[i] + prev[i - 1];
    }
    return prev;
  }
  return count(n).reduce((a, b) => a + b, 0);
};
