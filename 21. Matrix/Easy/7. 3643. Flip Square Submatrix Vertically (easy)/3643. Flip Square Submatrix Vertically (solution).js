/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
function reverseSubmatrix(grid, x, y, k) {
  for (let r = x; r < x + Math.floor(k / 2); r++) {
    const mirrorR = x + k - 1 - (r - x);

    for (let c = y; c < y + k; c++) {
      const tmp = grid[r][c];
      grid[r][c] = grid[mirrorR][c];
      grid[mirrorR][c] = tmp;
    }
  }

  return grid;
}
