/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
function countPrefixes(words, s) {
  let prefixesCnt = 0;
  for (const word of words) {
    if (s.startsWith(word)) prefixesCnt++;
  }

  return prefixesCnt;
}
