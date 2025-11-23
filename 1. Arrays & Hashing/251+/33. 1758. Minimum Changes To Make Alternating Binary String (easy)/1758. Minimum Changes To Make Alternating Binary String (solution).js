/**
 * @param {string} s
 * @return {number}
 */
function minOperations(s) {
  const n = s.length;

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      if (s[i] === '1') cnt++;
    } else {
      if (s[i] === '0') cnt++;
    }
  }

  return Math.min(cnt, n - cnt);
}
