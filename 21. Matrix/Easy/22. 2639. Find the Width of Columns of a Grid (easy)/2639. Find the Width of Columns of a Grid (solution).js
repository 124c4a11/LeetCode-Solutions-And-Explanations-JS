/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findColumnWidth(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const result = new Int32Array(COLS);
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const width = `${grid[r][c]}`.length;

      result[c] = Math.max(result[c], width);
    }
  }

  return result;
}
