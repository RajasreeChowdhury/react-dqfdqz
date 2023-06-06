import * as utils from './utils';
import moveLeft from './move-left';
export default function moveRight(inputBoard){
let board = [];
let score = 0;

inputBoard.forEach(function(item, index) {
  const workingRow = inputBoard[index];
  const temp = ([0,0,0,0]
  .concat(workingRow
    .filter(function(i) {
      return i != 0;
    })))
  .reverse()
  .slice(0,4);

  temp.forEach(function(item, index) {
    if (temp[index] == temp[index + 1]) {
      temp[index] = temp[index + 1] * 2;
      temp[index + 1] = 0;
      score += temp[index];
    }
  });

  const temp1=temp
  .filter(function(i) {
    return i != 0;
  })
  .concat(0, 0, 0, 0)
  .slice(0, 4);


  board.push(temp1.reverse());
})
console.log("board",board);
return { board, score };
}