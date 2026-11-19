/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const result = Array.from(
    { length: ROWS }, () => new Array(COLS)
  );
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const currNdx = r * COLS + c;
      const shiftedNdx = (currNdx + k) % (ROWS * COLS);

      const nr = Math.floor(shiftedNdx / COLS);
      const nc = shiftedNdx % COLS;

      result[nr][nc] = grid[r][c];
    }
  }

  return result;
}
