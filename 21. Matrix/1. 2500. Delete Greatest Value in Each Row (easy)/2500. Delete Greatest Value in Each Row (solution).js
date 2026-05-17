/**
 * @param {number[][]} grid
 * @return {number}
 */
function deleteGreatestValue(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  for (const row of grid) {
    row.sort((a, b) => a - b);
  }

  let colMaxSum = 0;
  for (let c = 0; c < COLS; c++) {
    let colMax = 0;
    for (let r = 0; r < ROWS; r++) {
      colMax = Math.max(colMax, grid[r][c]);
    }

    colMaxSum += colMax;
  }

  return colMaxSum;
}
