/**
 * @param {string} s
 * @return {boolean}
 */
function isSubstringPresent(s) {
  const n = s.length;

  const substringSet = new Set();
  for (let i = 1; i < n; i++) {
    substringSet.add(s[i - 1] + s[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    if (substringSet.has(s[i + 1] + s[i])) return true;
  }

  return false;
}
