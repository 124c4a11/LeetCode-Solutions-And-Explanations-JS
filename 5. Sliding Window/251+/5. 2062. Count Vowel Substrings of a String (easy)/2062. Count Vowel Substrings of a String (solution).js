/**
 * @param {string} word
 * @return {number}
 */
function countVowelSubstrings(word) {
  const n = word.length;

  let vowelSubstringsCnt = 0;
  for (let l = 0; l < n - 4; l++) {
    const vowelSet = new Set();
    for (let r = l; r < n; r++) {
      const char = word[r];

      if (
        char !== 'a'
        && char !== 'e'
        && char !== 'i'
        && char !== 'o'
        && char !== 'u'
      ) break;

      vowelSet.add(char);

      if (vowelSet.size === 5) {
        vowelSubstringsCnt++;
      }
    }
  }

  return vowelSubstringsCnt;
}
