/**
 * @param {string} s
 * @return {number}
 */
function maximumLengthSubstring(s) {
  let maxLength = 0;
  const charToFreq = new Int32Array(26);
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const rightCharNdx = s.codePointAt(r) - 97;

    charToFreq[rightCharNdx]++;

    while (charToFreq[rightCharNdx] > 2) {
      charToFreq[s.codePointAt(l) - 97]--;
      l++;
    }

    const currLength = r - l + 1;

    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength;
}
