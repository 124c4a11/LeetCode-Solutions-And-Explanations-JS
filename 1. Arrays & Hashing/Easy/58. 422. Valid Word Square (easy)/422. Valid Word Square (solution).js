/**
 * @param {string[]} words
 * @return {boolean}
 */
function validWordSquare(words) {
  const ROWS = words.length;

  let COLS = 0;
  for (const word of words) {
    COLS = Math.max(COLS, word.length);
  }

  if (
    COLS !== words[0].length
    || ROWS !== COLS
  ) return false;

  const colWords = [];
  for (let c = 0; c < COLS; c++) {
    const colWord = [];
    for (let r = 0; r < ROWS; r++) {
      if (c < words[r].length) {
        colWord.push(words[r][c]);
      }
    }

    colWords.push(colWord.join(''));
  }

  return words.every((w, i) => w === colWords[i]);
}
