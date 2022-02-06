/* 
no repeating letters
*/
function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  let letters = [];
  for (let letter of arr) {
    letters.includes(letter) ? "" : letters.push(letter);
  }
  return arr.join() === letters.join() ? true : false;
}

console.log(isIsogram("isogram"));
