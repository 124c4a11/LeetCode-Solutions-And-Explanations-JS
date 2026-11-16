/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
function cyclicShift(n, grid, rowShift, colShift) {
  const rowShiftedGrid = Array.from({ length: n }, () => new Array(n));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rowShiftedGrid[r][(c - rowShift[r] + n) % n] = grid[r][c];
    }
  }

  const result = Array.from({ length: n }, () => new Array(n));
  for (let c = 0; c < n; c++) {
    for (let r = 0; r < n; r++) {
      result[(r - colShift[c] + n) % n][c] = rowShiftedGrid[r][c];
    }
  }

  return result;
}
