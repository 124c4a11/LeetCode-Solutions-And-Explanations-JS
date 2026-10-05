/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
function checkTwoChessboards(coordinate1, coordinate2) {
  const colDiff = coordinate1.codePointAt(0) - coordinate2.codePointAt(0);
  const rowDiff = coordinate1[1] - coordinate2[1];

  return ((colDiff + rowDiff) & 1) === 0;
}
