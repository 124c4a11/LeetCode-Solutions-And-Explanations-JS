/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
  const sCharToFreq = new Int32Array(26);
  for (const char of s) {
    sCharToFreq[char.codePointAt(0) - 97]++;
  }

  const result = [];
  for (const char of order) {
    const i = char.codePointAt(0) - 97;

    result.push(char.repeat(sCharToFreq[i]));
    sCharToFreq[i] = 0;
  }

  for (let i = 0; i < 26; i++) {
    if (!sCharToFreq[i]) continue;

    const char = String.fromCodePoint(i + 97);

    result.push(char.repeat(sCharToFreq[i]));
    sCharToFreq[i] = 0;
  }

  return result.join('');
}
