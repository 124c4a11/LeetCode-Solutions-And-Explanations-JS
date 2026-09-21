/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
  const charAllowed = new Int32Array(26);
  for (const char of allowed) {
    charAllowed[char.charCodeAt(0) - 97] = 1;
  }

  let result = words.length;
  for (const word of words) {
    for (const char of word) {
      if (!charAllowed[char.charCodeAt(0) - 97]) {
        result--;
        break;
      }
    }
  }

  return result;
};
