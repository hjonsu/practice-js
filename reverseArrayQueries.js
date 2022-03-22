function performOperations(arr, operations) {
  let opPt1 = [];
  let toRev = [];
  let res = [];
  let arr1 = arr;
  console.log(arr1);

  for (let k = 0; k < operations.length; k++) {
    console.log(k, "k");
    console.log(arr1, "arr1 under k");
    res = [];
    toRev = [];
    console.log(res, arr1, "is arr1 empty?");
    for (let i = 0; i < arr1.length; i++) {
      if (i === operations[k][0] && i < operations[k][1]) {
        toRev.push(arr1[i]);
        console.log(toRev, "inside toRev push");
      } else if (i === operations[k][1]) {
        toRev.push(arr1[i]);
        opPt1.push(toRev.reverse());
        console.log(opPt1, "opPt1");
      } else if (i === arr1.length - 1) {
        opPt1.push(arr1[i]);
        res.push(opPt1.flat());
        opPt1 = [];
        arr1 = res[0];
        console.log(arr1.length);
        console.log(res, "res after loop ends");
      } else if (i < arr1.length) {
        opPt1.push(arr1[i]);
        console.log(arr1[i], "to be pushed into arr1");
      }
    }
  }
  return res.flat();
}

console.log(
  performOperations(
    [5, 2, 5, 1],
    [
      [1, 2],
      [1, 1],
    ]
  )
);
