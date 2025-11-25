/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const set = new Set();
  let result = 0;
  for (const char of s) {
    if (set.has(char)) {
      set.delete(char);
      result += 2;
    } else {
      set.add(char);
    }
  }

  return !set.size ? result : result + 1;
}
