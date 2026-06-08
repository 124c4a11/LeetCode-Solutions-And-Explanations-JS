/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2) {
  const s1Words = s1.split(' ');
  const s2Words = s2.split(' ');

  const wordToFreq = new Map();
  for (const word of s1Words) {
    wordToFreq.set(word, (wordToFreq.get(word) ?? 0) + 1);
  }
  for (const word of s2Words) {
    wordToFreq.set(word, (wordToFreq.get(word) ?? 0) + 1);
  }

  const uncommonWords = [];
  for (const pair of wordToFreq) {
    if (pair[1] === 1) uncommonWords.push(pair[0]);
  }

  return uncommonWords;
}
