/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    let backspaceCnt = 0;
    while (i >= 0) {
      if (s[i] === '#') {
        backspaceCnt++;
      } else if (backspaceCnt > 0) {
        backspaceCnt--;
      } else {
        break;
      }

      i--;
    }

    backspaceCnt = 0;
    while (j >= 0) {
      if (t[j] === '#') {
        backspaceCnt++;
      } else if (backspaceCnt > 0) {
        backspaceCnt--;
      } else {
        break;
      }

      j--;
    }

    if (s[i] !== t[j]) return false;

    i--;
    j--;
  }

  return true;
}
