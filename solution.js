/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  // TODO: complete
  let str2 = str.slice(ending.length * -1);
  return ending.length < 1 ? true : str2 === ending ? true : false;
}

console.log(solution("abc", "bc"));
