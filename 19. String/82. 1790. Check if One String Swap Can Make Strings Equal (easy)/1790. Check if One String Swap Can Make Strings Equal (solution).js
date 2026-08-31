/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
  let mismatchCnt = 0;
  let firstMismatchChar1 = '';
  let firstMismatchChar2 = ''
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];

    if (char1 !== char2) {
      mismatchCnt++;

      if (mismatchCnt > 2) return false;

      if (mismatchCnt === 2) {
        if (
          char1 !== firstMismatchChar2
          || char2 !== firstMismatchChar1
        ) return false;
      }

      if (mismatchCnt === 1) {
        firstMismatchChar1 = char1;
        firstMismatchChar2 = char2;
      }
    }
  }

  return mismatchCnt !== 1;
}
