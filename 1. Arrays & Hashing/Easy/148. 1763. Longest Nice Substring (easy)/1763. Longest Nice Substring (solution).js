/**
 * @param {string} s
 * @return {string}
 */
function longestNiceSubstring(s) {
  const n = s.length;

  let bestStart = 0;
  let bestEnd = 0;
  let bestSubstrLength = 0;
  for (let l = 0; l < n; l++) {
    let lowerMask = 0;
    let upperMask = 0;
    for (let r = l; r < n; r++) {
      const codePoint = s.codePointAt(r);

      if (codePoint > 96) {
        lowerMask |= 1 << (codePoint - 97);
      } else {
        upperMask |= 1 << (codePoint - 65);
      }

      const currSubstrLength = r - l + 1;

      if (
        lowerMask === upperMask
        && currSubstrLength > bestSubstrLength
      ) {
        bestStart = l;
        bestEnd = r;
        bestSubstrLength = currSubstrLength;
      }
    }
  }

  return bestSubstrLength === 0 ? "" : s.slice(bestStart, bestEnd + 1);
}
