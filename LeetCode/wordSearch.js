/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length <= 0 || word.length <= 0) {
    return false;
  }
  let final = false;
  // find first letter within matrix
  const recursive = (row, col, index) => {
    if (
      row < 0 ||
      col < 0 ||
      row > board.length - 1 ||
      col >= board[0].length
    ) {
      return;
    }
    if (board[row][col] !== word[index]) {
      return;
    }
    if (index === word.length - 1) {
      final = true;
      return;
    }
    // make sure block is not used again
    board[row][col] = null;
    // look in all directions to find next letter
    recursive(row - 1, col, index + 1);
    recursive(row + 1, col, index + 1);
    recursive(row, col - 1, index + 1);
    recursive(row, col + 1, index + 1);
    board[row][col] = word[index];
  };

  // make sure its possible to have word in board
  let boardCounter = {};

  for (let i = 0; i <= board.length - 1; i++) {
    for (let j = 0; j <= board[i].length - 1; j++) {
      if (!boardCounter[board[i][j]]) {
        boardCounter[board[i][j]] = 0;
      } else {
        boardCounter[board[i][j]] + 1;
      }
    }
  }
  for (let k = 0; k <= word.length - 1; k++) {
    if (boardCounter[word[k]] !== undefined && boardCounter[word[k]] > -1) {
      boardCounter[word[k]] - 1;
    } else {
      return false;
    }
  }

  for (let i = 0; i <= board.length - 1; i++) {
    for (let j = 0; j <= board[i].length - 1; j++) {
      if (board[i][j] === word[0]) {
        recursive(i, j, 0);
        if (final) {
          return final;
        }
      }
    }
  }

  // return true/false
  return final;
};
