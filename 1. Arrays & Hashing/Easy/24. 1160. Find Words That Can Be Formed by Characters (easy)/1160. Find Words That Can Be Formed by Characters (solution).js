/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const charFreq = new Int32Array(26);
  for (const char of chars) {
    charFreq[char.charCodeAt(0) - 97]++;
  }

  let result = 0;
  outer: for (const word of words) {
    const wordCharFreq = new Int32Array(26);
    for (const char of word) {
      const i = char.charCodeAt(0) - 97;

      wordCharFreq[i]++;

      if (wordCharFreq[i] > charFreq[i]) {
        continue outer;
      }
    }

    result += word.length;
  }

  return result;
}
