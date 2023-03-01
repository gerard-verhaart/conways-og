const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 10
const refreshInterval = 100
const randomize = true

let board = createBoard(size, randomize)

setTimeout(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInterval)
