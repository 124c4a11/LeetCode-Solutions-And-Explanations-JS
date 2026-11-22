/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function rowAndMaximumOnes(mat) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const rowNdxAndMaxOnes = [0, 0];
  for (let r = 0; r < ROWS; r++) {
    let onesCnt = 0;
    for (let c = 0; c < COLS; c++) {
      onesCnt += mat[r][c];
    }

    if (onesCnt > rowNdxAndMaxOnes[1]) {
      rowNdxAndMaxOnes[0] = r;
      rowNdxAndMaxOnes[1] = onesCnt;

      if (onesCnt === COLS) return rowNdxAndMaxOnes;
    }
  }

  return rowNdxAndMaxOnes;
}
