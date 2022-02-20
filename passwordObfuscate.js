/*

Lighthouse kata
Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/

const obfuscate = (password) => {
  let result = [];
  password.split("").forEach((letter) => {
    switch (letter) {
      case "a":
        result.push("4");
        break;
      case "e":
        result.push("3");
        break;
      case "o":
        result.push("0");
        break;
      case "l":
        result.push("1");
        break;
      default:
        result.push(letter);
    }
  });
  return result.join("");
};

console.log(obfuscate("audaciously"));
