/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }

  return charCount.every((n) => n === 0);
}