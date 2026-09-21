/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
function numberOfLines(widths, s) {
  let lineCnt = 1;
  let currLineWidth = 0;
  for (const char of s)
  {
    const charWidth = widths[char.codePointAt(0) - 97];

    if (currLineWidth + charWidth <= 100) {
      currLineWidth += charWidth;
    } else {
      lineCnt++;
      currLineWidth = charWidth;
    }
  }

  return [lineCnt, currLineWidth];
}
