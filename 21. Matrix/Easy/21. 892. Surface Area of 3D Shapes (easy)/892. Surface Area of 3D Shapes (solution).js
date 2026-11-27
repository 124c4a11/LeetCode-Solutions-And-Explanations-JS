/**
 * @param {number[][]} grid
 * @return {number}
 */
function surfaceArea(grid) {
  const n = grid.length;

  let totalSurfaceArea = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) continue;

      totalSurfaceArea += 2 + grid[r][c] * 4;

      if (r > 0) {
        totalSurfaceArea -= Math.min(grid[r][c], grid[r - 1][c]) * 2;
      }

      if (c > 0) {
        totalSurfaceArea -= Math.min(grid[r][c], grid[r][c - 1]) * 2;
      }
    }
  }

  return totalSurfaceArea;
}
