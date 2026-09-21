/**
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
  const charToFreq = new Int32Array(26);
  for (const char of s) {
    charToFreq[char.codePointAt(0) - 97]++;
  }

  const result = [];
  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (!charToFreq[i]) continue;

      result.push(String.fromCodePoint(i + 97));
      charToFreq[i]--;
    }

    for (let i = 25; i >= 0; i--) {
      if (!charToFreq[i]) continue;

      result.push(String.fromCodePoint(i + 97));
      charToFreq[i]--;
    }
  }

  return result.join('');
}
