/**
 * @param {string} s
 * @return {string}
 */
function freqAlphabets(s) {
  const n = s.length;

  const result = [];
  let i = 0;
  while (i < n) {
    if (
      i + 2 < n
      && s[i + 2] === '#'
    ) {
      const numStr = s.slice(i, i + 2);

      result.push(String.fromCodePoint(Number(numStr) + 96));
      i += 3;
    } else {
      result.push(String.fromCodePoint(Number(s[i]) + 96));
      i++;
    }
  }

  return result.join('');
}
