/**
 * @param {string[]} words
 * @return {boolean}
 */
function makeEqual(words) {
  const charFreq = new Int32Array(26);
  for (const word of words) {
    for (const char of word) {
      charFreq[char.charCodeAt(0) - 97]++;
    }
  }

  for (const freq of charFreq) {
    if (freq % words.length) return false;
  }

  return true;
}
