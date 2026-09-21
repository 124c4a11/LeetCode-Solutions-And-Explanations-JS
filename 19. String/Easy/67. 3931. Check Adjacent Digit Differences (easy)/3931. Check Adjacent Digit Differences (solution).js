/**
 * @param {string} s
 * @return {boolean}
 */
function isAdjacentDiffAtMostTwo(s) {
  for (let i = 1; i < s.length; i++) {
    if (Math.abs(s[i - 1] - s[i]) > 2) return false;
  }

  return true;
}
