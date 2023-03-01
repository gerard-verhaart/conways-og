function createBoard(size, randomize) {
  let newBoard = []
  for (let i = 0; i < size; i++) {
    newBoard[i] = []
    for (let j = 0; j < size; j++) {
      if (randomize) {
        newBoard[i][j] = Math.random() < 0.4 ? true : false
      } else {
        newBoard[i][j] = false
      }
    }
  }
  // console.log(newBoard)
  return newBoard
}

module.exports = createBoard
