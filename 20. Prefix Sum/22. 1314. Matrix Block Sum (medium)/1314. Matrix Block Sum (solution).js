/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
function matrixBlockSum(mat, k) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const prefixSums = Array.from(
    { length: ROWS + 1 },
    () => Array(COLS + 1).fill(0)
  );
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      prefixSums[r + 1][c + 1] =
        prefixSums[r][c + 1]
        + prefixSums[r + 1][c]
        - prefixSums[r][c]
        + mat[r][c];
    }
  }

  const result = Array.from(
    { length: ROWS },
    () => Array(COLS).fill(0)
  );
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const topRow = Math.max(r - k, 0);
      const leftCol = Math.max(c - k, 0);
      const bottomRow = Math.min(ROWS - 1, r + k);
      const rightCol = Math.min(COLS - 1, c + k);

      result[r][c] =
        prefixSums[bottomRow + 1][rightCol + 1]
        - prefixSums[topRow][rightCol + 1]
        - prefixSums[bottomRow + 1][leftCol]
        + prefixSums[topRow][leftCol];
    }
  }

  return result;
}
