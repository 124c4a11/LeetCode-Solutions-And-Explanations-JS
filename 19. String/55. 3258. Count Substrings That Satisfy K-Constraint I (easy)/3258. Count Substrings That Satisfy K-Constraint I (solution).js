/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function countKConstraintSubstrings(s, k) {
  let substringsCnt = 0;
  const numToCnt = [0, 0];
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    numToCnt[s[r]]++;

    while (numToCnt[0] > k && numToCnt[1] > k) {
      numToCnt[s[l]]--;
      l++;
    }

    substringsCnt += r - l + 1;
  }

  return substringsCnt;
}
