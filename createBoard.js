function createBoard(size) {
  let newBoard = []
  for (let i = 0; i < size; i++) {
    newBoard[i] = []
    for (let j = 0; j < size; j++) {
      newBoard[i][j] = Math.random() < 0.4 ? true : false
    }
  }
  // console.log(newBoard)
  return newBoard
}

module.exports = createBoard
