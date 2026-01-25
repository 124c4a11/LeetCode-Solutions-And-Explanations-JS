/**
 * @param {string} s
 * @return {string}
 */
function makeSmallestPalindrome(s) {
  const n = s.length;

  const result = new Array(n);
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const smalerChar = s[l] < s[r] ? s[l] : s[r];

    result[l] = smalerChar;
    result[r] = smalerChar;

    l++;
    r--;
  }

  return result.join('');
}
