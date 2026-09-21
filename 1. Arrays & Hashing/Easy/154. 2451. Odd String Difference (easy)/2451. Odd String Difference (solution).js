/**
 * @param {string[]} words
 * @return {string}
 */
function oddString(words) {
  const diffPatternToWords = new Map();
  for (const word of words) {
    const charsDiffs = new Array(word.length - 1);
    for (let i = 0; i < word.length - 1; i++) {
      const diff = word.charCodeAt(i + 1) - word.charCodeAt(i);

      charsDiffs[i] = diff;
    }

    const diffPattern = charsDiffs.join(',');

    if (!diffPatternToWords.has(diffPattern)) {
      diffPatternToWords.set(diffPattern, []);
    }

    diffPatternToWords.get(diffPattern).push(word);
  }

  for (const pair of diffPatternToWords) {
    const currWords = pair[1];

    if (currWords.length === 1) return currWords[0];
  }

  return '';
}
