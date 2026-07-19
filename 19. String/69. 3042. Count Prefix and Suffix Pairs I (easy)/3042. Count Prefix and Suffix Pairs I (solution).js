/**
 * @param {string[]} words
 * @return {number}
 */
function countPrefixSuffixPairs(words) {
  const n = words.length;

  let pairsCnt = 0;
  for (let i = 0; i < n; i++) {
    const word1 = words[i];

    for (let j = i + 1; j < n; j++) {
      const word2 = words[j];

      if (
        word2.startsWith(word1)
        && word2.endsWith(word1)
      ) pairsCnt++;
    }
  }

  return pairsCnt;
}
