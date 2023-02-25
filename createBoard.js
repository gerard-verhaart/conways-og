function createBoard(size) {
  let newBoard = []
  for (let i = 0; i < size; i++) {
    newBoard[i] = []
    for (let j = 0; j < size; j++) {
      newBoard[i][j] = false
    }
  }
  return newBoard
}

module.exports = createBoard
