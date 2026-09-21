/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function checkAlmostEquivalent(word1, word2) {
  const charToDiff  = new Int32Array(26);
  for (let i = 0; i < word1.length; i++) {
    charToDiff[word1.codePointAt(i) - 97]++;
    charToDiff[word2.codePointAt(i) - 97]--;
  }

  for (const diff of charToDiff) {
    if (Math.abs(diff) > 3) return false;
  }

  return true;
}
