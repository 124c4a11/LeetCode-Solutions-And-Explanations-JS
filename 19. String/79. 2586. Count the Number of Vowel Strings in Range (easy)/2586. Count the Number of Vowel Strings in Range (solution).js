/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function vowelStrings(words, left, right) {
  let vowelStringsCnt = 0;
  for (let i = left; i <= right; i++) {
    const word = words[i];
    const firstWordChar = word[0];
    const lastWordChar = word.at(-1);

    if (
      firstWordChar !== 'a'
      && firstWordChar !== 'e'
      && firstWordChar !== 'i'
      && firstWordChar !== 'o'
      && firstWordChar !== 'u'
    ) continue;

    if (
      lastWordChar !== 'a'
      && lastWordChar !== 'e'
      && lastWordChar !== 'i'
      && lastWordChar !== 'o'
      && lastWordChar !== 'u'
    ) continue;

    vowelStringsCnt++;
  }

  return vowelStringsCnt;
}
