/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/[^a-z]/);

  let mostFrequentWord = '';
  let maxFreq = 0;
  const wordToFreq = new Map();
  for (const word of words) {
    if (
      word == ''
      || bannedSet.has(word)
    ) continue;

    const freq = (wordToFreq.get(word) ?? 0) + 1;

    wordToFreq.set(word, freq);

    if (freq > maxFreq)
    {
      maxFreq = freq;
      mostFrequentWord = word;
    }
  }

  return mostFrequentWord;
}
