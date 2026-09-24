/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return 2;
  }

  return 1;
}
