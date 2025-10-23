/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  const result = [];
  for (let c = 0; c < matrix[0].length; c++) {
    result[c] = [];

    for (let r = 0; r < matrix.length; r++) {
      result[c][r] = matrix[r][c];
    }
  }

  return result;
}
