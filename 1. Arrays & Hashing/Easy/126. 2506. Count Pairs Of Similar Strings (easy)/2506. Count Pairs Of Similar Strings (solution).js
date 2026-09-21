/**
 * @param {string[]} words
 * @return {number}
 */
function similarPairs(words) {
  let pairsCnt = 0;
  const bitmaskToFreq = new Map();
  for (const word of words) {
    let wordBitmask = 0;
    for (const char of word) {
      wordBitmask |= 1 << (char.charCodeAt(0) - 97);
    }

    const prevCnt = bitmaskToFreq.get(wordBitmask) ?? 0;
    pairsCnt += prevCnt;

    bitmaskToFreq.set(wordBitmask, prevCnt + 1);
  }

  return pairsCnt;
}
