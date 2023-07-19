/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result = 0;
  for (let i = 0; i < sentences.length; i++) {
    let sentencesLength = sentences[i].split(" ").length;
    if (result < sentencesLength) result = sentencesLength;
  }
  return result;
};
