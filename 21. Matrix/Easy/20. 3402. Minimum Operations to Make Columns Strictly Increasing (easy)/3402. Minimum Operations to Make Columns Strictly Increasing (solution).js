/**
 * @param {number[][]} grid
 * @return {number}
 */
function minimumOperations(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let operationsCnt = 0;
  for (let c = 0; c < COLS; c++)
  {
    let prevValue = grid[0][c];
    for (let r = 1; r < ROWS; r++) {
      const currValue = grid[r][c];

      if (prevValue < currValue) {
        prevValue = currValue;
      } else {
        operationsCnt += prevValue + 1 - currValue;
        prevValue++;
      }
    }
  }

  return operationsCnt;
}
