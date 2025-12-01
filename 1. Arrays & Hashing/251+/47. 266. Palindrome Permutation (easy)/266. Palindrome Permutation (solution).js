/**
 * @param {string} s
 * @return {boolean}
 */
function canPermutePalindrome(s) {
  const unpairedSet = new Set();
  for (const char of s) {
    if (unpairedSet.has(char)) {
      unpairedSet.delete(char);
    } else {
      unpairedSet.add(char);
    }
  }

  return unpairedSet.size <= 1;
}
