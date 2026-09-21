/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
  const ROWS = strs.length;
  const COLS = strs[0].length;

  let columnsToDeleteCnt = 0;
  for (let c = 0; c < COLS; c++) {
    for (let r = 1; r < ROWS; r++) {
      if (strs[r - 1][c] > strs[r][c]) {
        columnsToDeleteCnt++;
        break;
      }
    }
  }

  return columnsToDeleteCnt;
}
