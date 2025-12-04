/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings(words, queries) {
  const n = words.length;
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

  const prefixCnt = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) {
    prefixCnt[i + 1] = prefixCnt[i];

    const word = words[i];

    if (
      vowelSet.has(word[0])
      && vowelSet.has(word.at(-1))
    ) prefixCnt[i + 1]++;
  }

  const result = [];
  queries.forEach(([l, r]) => {
    result.push(prefixCnt[r + 1] - prefixCnt[l]);
  });

  return result;
}
