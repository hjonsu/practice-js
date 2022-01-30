const diskAnalysis = (n, x, arr) => {
  let parsedArr = [];

  for (let i = 0; i < n; i++) {
    let nums = arr.slice(i, i + x);
    parsedArr.push(Math.min(...nums));
    if (nums[x - 1] === arr[n - 1]) {
      break;
    }
  }
  console.log(parsedArr);
  return Math.max(...parsedArr);
};

console.log(diskAnalysis(4, 2, [8, 2, 4, 6]));
console.log(diskAnalysis(3, 2, [8, 2, 4]));
console.log(diskAnalysis(10, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
