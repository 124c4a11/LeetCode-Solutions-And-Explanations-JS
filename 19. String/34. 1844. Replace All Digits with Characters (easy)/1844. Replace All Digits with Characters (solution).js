/**
 * @param {string} s
 * @return {string}
 */
function replaceDigits(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      result.push(String.fromCodePoint(s.codePointAt(i - 1) + Number(s[i])));
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
}
