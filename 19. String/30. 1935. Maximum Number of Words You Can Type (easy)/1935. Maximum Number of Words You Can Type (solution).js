/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters) {
  const charToBroken = new Int32Array(26);
  for (const char of brokenLetters) {
    charToBroken[char.codePointAt(0) - 97] = 1;
  }

  const words = text.split(' ');

  let result = 0;
  outer: for (const word of words) {
    for (const char of word) {
      if (charToBroken[char.codePointAt(0) - 97]) {
        continue outer;
      } 
    }

    result++;
  }

  return result;
}
