/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
function decodeMessage(key, message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const keyCharToAlphabetNdx = new Array(26).fill(-1);
  let alphabetNdx = 0;
  for (const char of key) {
    if (char === ' ') continue;

    const i = char.codePointAt(0) - 97;
    if (keyCharToAlphabetNdx[i] !== -1) continue;

    keyCharToAlphabetNdx[i] = alphabetNdx; 
    alphabetNdx++;
  }

  const result = [];
  for (const char of message) {
    if (char === ' ') {
      result.push(' ');
      continue;
    }

    const alphabetNdx = keyCharToAlphabetNdx[char.codePointAt(0) - 97];
    result.push(alphabet[alphabetNdx]);
  }

  return result.join('');
}
