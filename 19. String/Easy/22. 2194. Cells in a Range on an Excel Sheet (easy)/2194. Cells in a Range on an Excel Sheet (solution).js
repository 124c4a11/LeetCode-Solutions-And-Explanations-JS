/**
 * @param {string} s
 * @return {string[]}
 */
function cellsInRange(s) {
  const startCol = s.codePointAt(0);
  const endCol = s.codePointAt(3);

  const startRow = Number(s[1]);
  const endRow = Number(s[4]);

  const result = [];
  for (let c = startCol; c <= endCol; c++) {
    for (let r = startRow; r <= endRow; r++) {
      result.push(String.fromCodePoint(c) + r);
    }
  }

  return result;
}
