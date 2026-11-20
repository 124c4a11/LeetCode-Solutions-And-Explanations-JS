/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const colToSum = new Int32Array(COLS);
  const candidateCols = [];
  for (let r = 0; r < ROWS; r++) {
    let rowSum = 0;
    let candidateCol = 0;
    for (let c = 0; c < COLS; c++) {
      if (mat[r][c] === 0) continue;

      rowSum++;
      colToSum[c]++;
      candidateCol = c;
    }

    if (rowSum === 1) candidateCols.push(candidateCol);
  }

  let specialPositionsCnt = 0;
  for (const c of candidateCols) {
    if (colToSum[c] === 1) specialPositionsCnt++;
  }

  return specialPositionsCnt;
}
