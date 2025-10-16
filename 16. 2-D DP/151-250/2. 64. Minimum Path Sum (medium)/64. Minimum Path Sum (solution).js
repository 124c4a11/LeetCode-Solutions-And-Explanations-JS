/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  const dp = new Array(COLS + 1).fill(Infinity);
  dp[COLS - 1] = 0;
  for (let r = ROWS - 1; r >= 0; r--) {
    for (let c = COLS - 1; c >= 0; c--) {
      dp[c] = grid[r][c] + Math.min(dp[c], dp[c + 1]);
    }
  }

  return dp[0];
}
