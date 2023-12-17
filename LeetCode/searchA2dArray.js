/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let thisArr = [];
  if (matrix.length === 1) {
    thisArr = matrix[0];
  } else {
    x = 1;
    while (x < matrix.length) {
      if (target === matrix[x][0]) {
        return true;
      }
      if (target < matrix[x][0]) {
        thisArr = matrix[x - 1];
        break;
      }
      if (x === matrix.length - 1) {
        thisArr = matrix[x];
        break;
      }
      x++;
    }
  }
  let l = 0;
  let r = thisArr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === thisArr[mid]) {
      return true;
    }
    if (target < thisArr[mid]) {
      r = mid;
    }
    if (target > thisArr[mid]) {
      l = mid + 1;
    }
    if (l === r && target !== thisArr[l]) {
      return false;
    }
  }
  return false;
};
