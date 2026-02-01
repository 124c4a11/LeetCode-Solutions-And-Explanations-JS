/**
 * @param {string} s
 * @return {boolean}
 */
function areOccurrencesEqual(s) {
  const charToFreq = new Int32Array(26);
  let maxFreq = 0;
  for (const char of s) {
    const i = char.codePointAt(0) - 97;

    charToFreq[i]++;
    maxFreq = Math.max(maxFreq, charToFreq[i]);
  }
 
  for (const freq of charToFreq) {
    if (!freq) continue;
    if (freq !== maxFreq) return false;
  }

  return true;
}
