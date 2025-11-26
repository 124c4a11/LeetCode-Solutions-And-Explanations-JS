/**
 * @param {string} s
 * @return {number}
 */
function maxLengthBetweenEqualCharacters(s) {
  const charToFirstNdx = new Map();
  let result = -1;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!charToFirstNdx.has(char)) {
      charToFirstNdx.set(char, i);
    } else {
      result = Math.max(result, i - charToFirstNdx.get(char) - 1);
    }
  }

  return result;
}
