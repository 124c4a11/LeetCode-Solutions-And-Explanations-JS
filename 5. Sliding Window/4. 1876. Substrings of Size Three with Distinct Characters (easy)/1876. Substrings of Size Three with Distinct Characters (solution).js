/**
 * @param {string} s
 * @return {number}
 */
function countGoodSubstrings(s) {
  let substringsCnt = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (
      s[i] !== s[i + 1]
      && s[i + 1] !== s[i + 2]
      && s[i + 2] !== s[i]
    ) substringsCnt++;
  }

  return substringsCnt;
}
