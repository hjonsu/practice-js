/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// let str2 = str.slice(-ending.length);
function solution(str, ending) {
  return ending.length < 1
    ? true
    : str.slice(-ending.length) === ending
    ? true
    : false;
}

console.log(solution("abc", "bc"));
