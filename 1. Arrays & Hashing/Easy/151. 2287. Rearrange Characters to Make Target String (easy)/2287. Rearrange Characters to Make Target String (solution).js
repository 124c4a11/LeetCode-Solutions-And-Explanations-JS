/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
function rearrangeCharacters(s, target) {
  const targetCharToFreq = new Int32Array(26);
  for (const char of target) {
    targetCharToFreq[char.codePointAt(0) - 97]++;
  }

  const sCharToFreq = new Int32Array(26);
  for (const char of s) {
    sCharToFreq[char.codePointAt(0) - 97]++;
  }

  let copiesCnt = Infinity;
  for (let i = 0; i < 26; i++) {
    const targetCharFreq = targetCharToFreq[i];
    if (targetCharFreq === 0) continue;

    const sCharFreq = sCharToFreq[i];
    if (sCharFreq === 0) return 0;

    const possibleCopiesCnt = Math.floor(sCharFreq / targetCharFreq);

    copiesCnt = Math.min(copiesCnt, possibleCopiesCnt);
  }

  return copiesCnt;
}
