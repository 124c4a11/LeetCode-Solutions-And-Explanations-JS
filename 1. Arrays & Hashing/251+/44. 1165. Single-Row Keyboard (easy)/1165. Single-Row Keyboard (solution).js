/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
function calculateTime(keyboard, word) {
  const charToNdx = new Int32Array(26);
  for (let i = 0; i < keyboard.length; i++) {
    charToNdx[keyboard.charCodeAt(i) - 97] = i;
  }

  let result = 0;
  let prevNdx = 0;
  for (const char of word) {
    const charNdx = charToNdx[char.charCodeAt(0) - 97];

    result += Math.abs(charNdx - prevNdx);
    prevNdx = charNdx;
  }

  return result;
}
