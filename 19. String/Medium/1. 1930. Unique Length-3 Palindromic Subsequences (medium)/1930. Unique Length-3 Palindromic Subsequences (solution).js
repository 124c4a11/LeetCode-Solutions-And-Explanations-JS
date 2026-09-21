/**
 * @param {string} s
 * @return {number}
 */
function countPalindromicSubsequence(s) {
  const charToFirstNdx = new Int32Array(26).fill(-1);
  const charToLastNdx = new Int32Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const j = s.charCodeAt(i) - 97;

    if (charToFirstNdx[j] === -1) {
      charToFirstNdx[j] = i;
    }

    charToLastNdx[j] = i;
  }

  let result = 0;
  for (let i = 0; i < 26; i++) {
    const l = charToFirstNdx[i];
    const r = charToLastNdx[i];

    if (l === -1 || l === r) continue;

    const innerCharsSet = new Set();
    for (let j = l + 1; j < r; j++) {
      innerCharsSet.add(s[j]);
    }

    result += innerCharsSet.size;
  }

  return result;
}
