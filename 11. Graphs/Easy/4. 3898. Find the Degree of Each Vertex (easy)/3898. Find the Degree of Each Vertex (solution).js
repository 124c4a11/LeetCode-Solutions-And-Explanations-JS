/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function findDegrees(matrix) {
  const n = matrix.length;

  const degrees = new Array(n);
  for (let r = 0; r < n; r++) {
    let degree = 0;
    for (let c = 0; c < n; c++) {
      degree += matrix[r][c];
    }

    degrees[r] = degree;
  }

  return degrees;
}
