const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  let commonCharacterCount = 0;
  for (let i = 0; i < string1.length; i++) {
    let charIndexInString2 = string2.indexOf(string1[i]);
    if (charIndexInString2 >= 0) {
      commonCharacterCount++;
      string2 = string2.replace(string1[i], "");
    }
  }
  return commonCharacterCount;
}

module.exports = {
  getCommonCharacterCount
};
