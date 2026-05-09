/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
  const n = s.length;

  let substringsCnt = 0;
  let l = 0;
  let prevLen = 0;
  while (l < n) {
    let r = l + 1;
    while (r < n && s[l] === s[r]) r++;

    const currLen = r - l;

    substringsCnt += Math.min(prevLen, currLen);

    prevLen = currLen;
    l = r;
  }

  return substringsCnt;
}
