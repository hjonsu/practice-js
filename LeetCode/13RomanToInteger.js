/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        total += 4;
        continue;
      }
      if (s[i + 1] === "X") {
        total += 9;
        continue;
      }
      total += 1;
      continue;
    }
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        total += 40;
        continue;
      }
      if (s[i + 1] === "C") {
        total += 90;
        continue;
      }
    }
    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        total += 400;
        continue;
      }
      if (s[i + 1] === "M") {
        total += 900;
        continue;
      }
    }
    if (s[i] === "V" && s[i - 1] !== "I") {
      total += 5;
      continue;
    }
    if (s[i] === "X" && s[i - 1] !== "I") {
      total += 10;
      continue;
    }
    if (s[i] === "L" && s[i - 1] !== "X") {
      total += 50;
      continue;
    }
    if (s[i] === "C" && s[i - 1] !== "X") {
      total += 100;
      continue;
    }
    if (s[i] === "D" && s[i - 1] !== "C") {
      total += 500;
      continue;
    }
    if (s[i] === "M" && s[i - 1] !== "C") {
      total += 1000;
      continue;
    }
  }
  return total;
};
