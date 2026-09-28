/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
function isPrefixOfWord(sentence, searchWord) {
  const n = sentence.length;
  const m = searchWord.length;

  let wordNdx = 1;
  let i = 0;
  while (i < n) {
    let j = 0;
    let isMatch = true;
    while (j < m)
    {
      if (
        i < n
        && sentence[i] === searchWord[j]
      ) {
        i++;
        j++
      } else {
        isMatch = false;
        break;
      }
    }

    if (isMatch) return wordNdx;

    while (
      i < n
      && sentence[i] !== ' '
    ) i++

    if (
      i < n
      && sentence[i] === ' '
    )
    {
      wordNdx++;
      i++;
    }
  }

  return -1;
}
