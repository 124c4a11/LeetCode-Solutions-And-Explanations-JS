/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') continue;

    k--;
    
    if (!k) return s.slice(0, i);
  }

  return s;
}
