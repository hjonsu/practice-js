// https://leetcode.com/problems/length-of-last-word/submissions/1123502463

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === 1) {
    return s[0].length;
  }
  const regExpLiteral = /\w+/g;
  const newStr = s.match(regExpLiteral);
  return newStr[newStr.length - 1].length;
};

// Runtime
// 33
// ms
// Beats
// 99.86%
// of users with JavaScript
