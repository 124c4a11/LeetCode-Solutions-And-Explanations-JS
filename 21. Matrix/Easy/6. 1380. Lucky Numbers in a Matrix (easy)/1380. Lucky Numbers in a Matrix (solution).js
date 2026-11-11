/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let maxOfRowMins = -Infinity;
  for (let r = 0; r < ROWS; r++) {
    let rowMin = matrix[r][0];
    for (let c = 0; c < COLS; c++) {
      rowMin = Math.min(rowMin, matrix[r][c]);
    }

    maxOfRowMins = Math.max(maxOfRowMins, rowMin);
  }

  for (let c = 0; c < COLS; c++) {
    let colMax = matrix[0][c];
    for (let r = 0; r < ROWS; r++) {
      colMax = Math.max(colMax, matrix[r][c]);
    }

    if (colMax === maxOfRowMins) return [colMax];
  }

  return [];
}
