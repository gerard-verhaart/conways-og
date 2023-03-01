const nextCellState = require('../nextCellState')

test('nextCellState', () => {
  expect(nextCellState(true, 1)).toBeFalsy()
  expect(nextCellState(true, 2)).toBeTruthy()
  expect(nextCellState(false, 2)).toBeFalsy()
  expect(nextCellState(true, 3)).toBeTruthy()
  expect(nextCellState(false, 3)).toBeTruthy()
  expect(nextCellState(true, 4)).toBeFalsy()
})
