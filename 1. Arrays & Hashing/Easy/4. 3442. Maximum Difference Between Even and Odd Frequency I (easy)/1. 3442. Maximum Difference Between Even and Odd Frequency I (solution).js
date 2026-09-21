/**
 * @param {string} s
 * @return {number}
 */
function maxDifference(s) {
  const charFreq = new Int32Array(26);
  for (const char of s) {
    charFreq[char.charCodeAt(0) - 97]++;
  }

  let oddMax = 0;
  let evenMin = s.length;
  for (const freq of charFreq) {
    if (!freq) continue;

    if (freq & 1) {
      oddMax = Math.max(oddMax, freq);
    } else {
      evenMin = Math.min(evenMin, freq);
    }
  }

  return oddMax - evenMin;
}
