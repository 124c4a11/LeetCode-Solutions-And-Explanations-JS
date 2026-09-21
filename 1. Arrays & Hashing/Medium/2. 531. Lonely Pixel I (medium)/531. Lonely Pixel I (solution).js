/**
 * @param {character[][]} picture
 * @return {number}
 */
function findLonelyPixel(picture) {
  const ROWS = picture.length;
  const COLS = picture[0].length;

  const rowToBlackPixelCnt = new Int32Array(ROWS);
  const colToBlackPixelCnt = new Int32Array(COLS);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (picture[r][c] !== 'B') continue;

      rowToBlackPixelCnt[r]++;
      colToBlackPixelCnt[c]++;
    }
  }

  let result = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (
        picture[r][c] === 'B'
        && rowToBlackPixelCnt[r] === 1
        && colToBlackPixelCnt[c] === 1
      ) result++;
    }
  }

  return result;
}
