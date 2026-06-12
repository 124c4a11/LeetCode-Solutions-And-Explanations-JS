/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const keyboardRowMapping = '12210111011122000010020202';

  const validWords = [];
  outer: for (const word of words) {
    const lowercaseWord = word.toLowerCase();

    const firstCharNdx = lowercaseWord.charCodeAt(0) - 97;
    const targetRow = keyboardRowMapping[firstCharNdx];

    for (let i = 1; i < lowercaseWord.length; i++) {
      const charNdx = lowercaseWord.charCodeAt(i) - 97;

      if (keyboardRowMapping[charNdx] !== targetRow) {
        continue outer;
      }
    }

    validWords.push(word);
  }

  return validWords;
}
