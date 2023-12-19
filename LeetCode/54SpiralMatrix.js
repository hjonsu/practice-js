/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const shell = (matrix, agg) => {
    if (matrix.length === 0) return agg;

    if (matrix.length === 1) {
      matrix[0].forEach((index) => {
        agg.push(index);
      });
      return agg;
    }

    if (matrix[0].length === 1) {
      matrix.forEach((index) => {
        agg.push(index);
      });
      return agg;
    }

    matrix[0].forEach((index) => {
      agg.push(index);
    });

    for (let i = 1; i < matrix.length - 1; i++) {
      agg.push(matrix[i][matrix[i].length - 1]);
    }

    for (let i = matrix[matrix.length - 1].length - 1; i > 0; i--) {
      agg.push(matrix[matrix.length - 1][i]);
    }

    for (let i = matrix.length - 1; i > 0; i--) {
      agg.push(matrix[i][0]);
    }

    const temp = matrix.slice(1, matrix.length - 1);
    const newMatrix = [];

    for (let i = 0; i < temp.length; i++) {
      const inner = temp[i].slice(1, temp[i].length - 1);
      if (inner.length > 0) {
        newMatrix.push(inner);
      }
    }
    return shell(newMatrix, agg);
  };

  return shell(matrix, []);
};
