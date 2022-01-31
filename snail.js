/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

// snail = function (array) {
//   let snail = [];
//   let height = array.length - 1;
//   if (array.length > 1) {
//     for (let i = 0; i < array.length; i++) {
//       if (i === 0) {
//         array[i].forEach((num) => {
//           snail.push(num);
//         });
//       }
//       if (i < height && i !== 0) {
//         snail.push(array[i][array[i].length - 1]);
//       }
//       if (i === height) {
//         array[i].reverse().forEach((num) => {
//           snail.push(num);
//         });
//       }
//     }

//     for (let i = array.length - 1; i > 0; i--) {
//       if (i < height && i !== 0) {
//         snail.push(array[i][0]);
//       }
//       if (i === 1) {
//         array[i].forEach((num) => {
//           if (num !== array[i][0] && num !== array[i][array[i].length - 1]) {
//             snail.push(num);
//           }
//         });
//       }
//     }
//   } else {
//     return array;
//   }
//   return snail;
// };

snail = function (array) {
  // enjoy
  const n = array[0].length;
  const ret = [];
  if (n === 0) return [];
  if (n === 1) return [array[0][0]];

  // start pos
  let x = 0;
  let y = 0;

  // dir init: right
  let xx = 1;
  let yy = 0;

  const newDir = (xx, yy) => {
    if (xx === 1 && yy === 0) return [0, 1];
    if (xx === 0 && yy === 1) return [-1, 0];
    if (xx === -1 && yy === 0) return [0, -1];
    else return [1, 0];
  };

  const edgeList = [
    [2, 0],
    [2, 2],
    [0, 2],
    [0, 1],
    [1, 1],
  ];

  const nextInEdgeList = (newX, newY) => {
    const found = edgeList.find((xy) => xy[0] === newX && xy[1] === newY);
    if (found === undefined) return false;
    return true;
  };

  let count = 0;
  ret.push();
  // Forward Array
  while (ret.length < n * n) {
    console.log(ret.length, n * n, ret.length < n * n);
    //     break;
    ret.push(array[y][x]);
    console.log(x, y);
    if (nextInEdgeList(x, y)) {
      //       console.log(nextX, nextY);
      console.log("need to change dir");
      const dir = newDir(xx, yy);
      xx = dir[0];
      yy = dir[1];
    }

    x += xx;
    y += yy;
  }

  return ret;
};

array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(snail(array));

// WIP
