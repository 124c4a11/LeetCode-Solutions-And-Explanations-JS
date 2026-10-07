/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
function isPrefixString(s, words) {
  const n = s.length;

  let i = 0;
  for (const word of words) {
    const m = word.length;

    let j = 0;
    while (i < n && j < m) {
      if (s[i] !== word[j]) return false;

      i++;
      j++;
    }

    if (j < m) return false;
    if (i === n) return true;
  }

  return false;
}
