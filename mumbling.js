// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// First letter always capitalized
// Each index seperated by -
// The number of each letter corresponds to its index
// Arg is a string
// Return is a string

// Solution 1

// function accum(s) {
//   let arr = [];
//   let strArr = s.split("");

//   const times = function (n, arg) {
//     for (let i = 0; i < n; i++) {
//       arr.push(arg);
//     }
//   };

//   for (let i = 0; i < strArr.length; i++) {
//     times(i + 1, strArr[i].toLowerCase());
//     arr.push("-");
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] === "-" || i === 0) {
//       arr[i] = arr[i].toUpperCase();
//     }
//   }
//   arr.pop();

//   let arr1 = arr.join("");
//   return arr1;
// }

// Solution 2

function accum(s) {
  let arr = [];
  let strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    arr.push(strArr[i].toLowerCase().repeat(i + 1));
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("-");
}

console.log(accum("abcd"));
