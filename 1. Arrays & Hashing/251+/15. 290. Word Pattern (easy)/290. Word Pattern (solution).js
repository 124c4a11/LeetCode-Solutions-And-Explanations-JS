/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = new Map();
  const wordToChar = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (
      !charToWord.has(char)
      && !wordToChar.has(word)
    ) {
      charToWord.set(char, word);
      wordToChar.set(word, char);
      continue;
    }

    if (
      charToWord.get(char) !== word
      || wordToChar.get(word) !== char
    ) return false;
  }

  return true;
};
