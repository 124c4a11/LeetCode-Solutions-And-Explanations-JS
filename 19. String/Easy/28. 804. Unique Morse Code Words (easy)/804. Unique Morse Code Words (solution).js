/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const charToMorse = [".-","-...","-.-.","-..",".","..-.","--.",
  "....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",
  ".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  const morseWordSet = new Set();
  for (const word of words) {
    const morseWordCodes = [];
    for (const char of word) {
      morseWordCodes.push(charToMorse[char.codePointAt(0) - 97]);
    }

    morseWordSet.add(morseWordCodes.join(''));
  } 

  return morseWordSet.size;
}
