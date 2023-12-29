/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  // recursion
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b);
  }
  const recursion = (matrix, agg) => {
    if (matrix[0].length <= 0) {
      total = agg;
      return;
    }
    let current = 0;
    // loop through matrix
    for (let i = 0; i < matrix.length; i++) {
      const a = matrix[i].pop();
      current > a ? null : (current = a);
    }
    // add largest
    agg += current;
    recursion(matrix, agg);
  };
  recursion(grid, 0);
  return total;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let sum = 0,
    idx = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a);
  }

  while (idx < grid[0].length) {
    let max = -Infinity;
    for (let i = 0; i < grid.length; i++) {
      max = Math.max(grid[i][idx], max);
    }

    idx++;
    sum += max;
  }

  return sum;
};
