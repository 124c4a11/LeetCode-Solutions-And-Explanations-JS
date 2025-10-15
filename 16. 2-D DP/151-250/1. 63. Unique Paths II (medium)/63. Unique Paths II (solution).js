/**
 * @param {number[][]} grid
 * @return {number}
 */
function uniquePathsWithObstacles(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  if (
    grid[0][0] === 1
    || grid[ROWS - 1][COLS - 1] === 1
  ) return 0;


  grid[ROWS - 1][COLS - 1] = 1;

  for (let r = ROWS - 1; r >= 0; r--) {
    for (let c = COLS - 1; c >= 0; c--) {
      if (
        r === ROWS - 1
        && c === COLS - 1
      ) continue;


      if (grid[r][c] === 1) {
        grid[r][c] = 0;
      } else {
        const downWays = r + 1 < ROWS
          ? grid[r + 1][c]
          : 0;
        const rightWays = c + 1 < COLS
          ? grid[r][c + 1]
          : 0;

        grid[r][c] = downWays + rightWays;
      }
    }
  }

  return grid[0][0];
}
