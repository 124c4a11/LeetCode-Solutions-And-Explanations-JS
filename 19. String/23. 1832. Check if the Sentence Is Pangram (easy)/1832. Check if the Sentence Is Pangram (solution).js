/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  const letterToSeen = new Array(26).fill(false);
  for (const char of sentence) {
    letterToSeen[char.codePointAt(0) - 97] = true;
  }

  return letterToSeen.every((seen) => seen);
}
