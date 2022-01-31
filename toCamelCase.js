/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let camel = [];
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === "-" || arr[i - 1] === "_") {
      camel.push(arr[i].toUpperCase());
    } else {
      camel.push(arr[i]);
    }
  }

  let filtered = camel.filter((letter) => letter !== "_" && letter !== "-");

  return filtered.join("");
}

console.log(toCamelCase("string_string-"));
