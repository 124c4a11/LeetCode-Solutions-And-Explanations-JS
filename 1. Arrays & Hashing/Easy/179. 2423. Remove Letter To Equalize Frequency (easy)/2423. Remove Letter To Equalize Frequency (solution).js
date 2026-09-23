/**
 * @param {string} word
 * @return {boolean}
 */
function equalFrequency(word) {
  const charToFreq = new Int32Array(26);
  for (const char of word) {
    charToFreq[char.codePointAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (charToFreq[i] === 0) continue;

    charToFreq[i]--;

    let targetFreq = 0;
    let isEqualFreq = true;
    for (const freq of charToFreq) {
      if (freq === 0) continue;

      if (targetFreq === 0) {
        targetFreq = freq;
      } else if (freq !== targetFreq) {
        isEqualFreq = false;
        break;
      }
    }

    if (isEqualFreq) return true;

    charToFreq[i]++;
  }

  return false;
}
