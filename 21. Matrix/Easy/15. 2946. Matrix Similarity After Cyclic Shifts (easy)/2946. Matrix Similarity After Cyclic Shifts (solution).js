/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
function areSimilar(mat, k) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  k %= COLS;

  if (k === 0) return true;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (mat[r][c] !== mat[r][(c + k) % COLS]) {
        return false;
      }
    }
  }

  return true;
}
