/**
 * @param {string[]} words
 * @return {string[]}
 */
function removeAnagrams(words) {
  const result = [];
  let prevWordHash = '';
  for (const word of words) {
    const charToFreq = new Int32Array(26);
    for (const char of word) {
      charToFreq[char.codePointAt(0) - 97]++;
    }

    const currWordHash = charToFreq.join('');

    if (currWordHash === prevWordHash) continue;

    result.push(word);
    prevWordHash = currWordHash;
  }

  return result;
}
