function displayBoard(board) {
  // eslint-disable-next-line no-console
  // console.log(board)
  for (const line of board) {
    let string = ''
    for (const part of line) {
      string += part ? '*' : ' '
    }
    console.log(string)
  }
}

module.exports = displayBoard
