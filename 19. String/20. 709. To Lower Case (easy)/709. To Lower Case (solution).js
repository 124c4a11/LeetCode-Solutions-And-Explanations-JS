/**
 * @param {string} s
 * @return {string}
 */
function toLowerCase(s) {
  const result = [];
  for (const char of s) {
    const code = char.codePointAt(0);

    if (code >= 65 && code <= 90) {
      result.push(String.fromCodePoint(code + 32));
    } else {
      result.push(char);
    }
  }

  return result.join('');
}
