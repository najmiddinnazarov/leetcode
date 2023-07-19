/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  const reversed1 = +[...`${num}`].reverse().join("") * 1;
  const reversed2 = +[...`${reversed1}`].reverse().join("");
  return reversed2 === num;
};
