/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let perimeter = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) continue;

      perimeter += 4

      if (
        c + 1 < COLS
        && grid[r][c + 1] === 1
      ) perimeter -= 2;

      if (
        r + 1 < ROWS
        && grid[r + 1][c] === 1
      ) perimeter -= 2;
    }
  }

  return perimeter;
}
