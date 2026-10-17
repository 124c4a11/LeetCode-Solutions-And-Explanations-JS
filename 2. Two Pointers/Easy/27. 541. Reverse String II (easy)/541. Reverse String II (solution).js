/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  const n = s.length;

  const chars = s.split('');
  for (let start = 0; start < n; start += 2 * k) {
    let l = start;
    let r = Math.min(start + k - 1, n - 1);
    while (l < r) {
      const tmp = chars[l];
      chars[l] = chars[r];
      chars[r] = tmp;

      l++;
      r--;
    }
  }

  return chars.join('');
}
