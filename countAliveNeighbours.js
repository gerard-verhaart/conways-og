const getNeighbours = require('./getNeighbours')

function countAliveNeighbours(cellRow, cellColumn, board) {
  let neighbourArray = getNeighbours(cellRow, cellColumn, board)
  let count = 0
  for (let i = 0; i < neighbourArray.length; i++) {
    if (neighbourArray[i]) {
      count++
    }
  }
  return count
  // console.log(cellRow, ' : ', cellColumn)
  // console.log(board)
}

module.exports = countAliveNeighbours
