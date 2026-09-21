/**
 * @param {string} s
 * @return {number}
 */
function maxFreqSum(s) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

  const charFreq = new Int32Array(26);
  for (const char of s) {
    charFreq[char.codePointAt(0) - 97]++;
  }

  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;
  for (const char of s) {
    const freq = charFreq[char.codePointAt(0) - 97];

    if (vowelSet.has(char)) {
      maxVowelFreq = Math.max(maxVowelFreq, freq);
    } else {
      maxConsonantFreq = Math.max(maxConsonantFreq, freq);
    }
  }

  return maxVowelFreq + maxConsonantFreq;
}
