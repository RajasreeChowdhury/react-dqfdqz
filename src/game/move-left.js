/**
 * Write code to move and merge elements in the left direction.
 */
 export default function moveLeft(inputBoard) {
  let board = [];
  let score = 0;
  
  inputBoard.forEach(function(item, index) {
    const workingRow = inputBoard[index];
    const temp = workingRow
    .filter(function(i) {
      return i != 0;
    })
    .concat(0, 0, 0, 0)
    .slice(0, 4);

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


    board.push(temp1);
  })
  return { board, score };
}

