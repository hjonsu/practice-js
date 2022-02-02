function sumTwoSmallestNumbers(numbers) {
  let nums = [];
  let nums1 = [];

  numbers.forEach((num) => {
    if (isNaN(num) === false) {
      nums.push(num);
    }
  });

  const min = Math.min(...nums);

  nums.forEach((num) => {
    if (num !== min) {
      nums1.push(num);
    }
  });

  const min2 = Math.min(...nums1);

  return min + min2;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([213213213, 123123213, 42133213, 23, 77]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, "s"]));

// Better Solution

// function sumTwoSmallestNumbers(numbers){
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };
