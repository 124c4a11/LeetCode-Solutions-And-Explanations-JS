/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function minDeletion(s, k) {
  let uniqueCnt = 0;
  const charToFreq = new Int32Array(26);
  for (const char of s) {
    const charNdx = char.codePointAt(0) - 97;

    if (charToFreq[charNdx] === 0) uniqueCnt++;

    charToFreq[charNdx]++;
  }

  if (uniqueCnt <= k) return 0;

  charToFreq.sort((a, b) => a - b);

  let deletionsCnt = 0;
  for (let i = 0; i < 26 - k; i++) {
    deletionsCnt += charToFreq[i];
  }

  return deletionsCnt;
}
