/**
 * @param {string} s
 * @return {string}
 */
function trimTrailingVowels(s) {
  let i = s.length - 1;
  while (i >= 0) {
    if (
      s[i] === 'a'
      || s[i] === 'e'
      || s[i] === 'i'
      || s[i] === 'o'
      || s[i] === 'u'
    ) i--;
    else break;
  }

  return s.slice(0, i + 1);
}
