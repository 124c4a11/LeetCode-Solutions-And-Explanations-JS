/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
function percentageLetter(s, letter) {
  let letterCnt = 0;
  for (const char of s) {
    if (char === letter) letterCnt++;
  }

  return Math.floor(letterCnt / s.length * 100);
}
