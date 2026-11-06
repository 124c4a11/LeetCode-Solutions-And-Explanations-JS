/**
 * @param {string} s
 * @return {string}
 */
function largestEven(s) {
  for (let i = s.length - 1; i >= 0; i--)
  {
    if (s[i] === '2') return s.slice(0, i + 1);
  }

  return '';
}
