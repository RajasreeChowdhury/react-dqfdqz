import * as utils from './utils';
import moveLeft from './move-left';

export default function moveUp(inputBoard) {
  let board = [];
  let score = 0;

  function transpose(matrix) {
    return matrix.reduce(
      (prev, next) => next.map((temp, i) => (prev[i] || []).concat(next[i])),
      []
    );
  }

  let Board1 = transpose(inputBoard);

  inputBoard.forEach(function(item, index) {
    const workingRow = inputBoard[index];
    const temp = [0, 0, 0, 0]
    .concat(workingRow
      .filter(function(i) {
        return i != 0;
      }))
      .reverse()
      .slice(0, 4);

    // merging  same number tiles

    
    temp.forEach(function(item, index) {
      if (temp[index] == temp[index + 1]) {
        temp[index] = temp[index + 1] * 2;
        temp[index + 1] = 0;
        score += temp[index];
      }
    });
    const temp1 = temp
    .filter(function(i) {
      return i != 0;
    })
      .concat(0, 0, 0, 0)
      .slice(0, 4);
    board.push(temp1.reverse());
  })
  board = transpose(board);
  return { board, score };
}