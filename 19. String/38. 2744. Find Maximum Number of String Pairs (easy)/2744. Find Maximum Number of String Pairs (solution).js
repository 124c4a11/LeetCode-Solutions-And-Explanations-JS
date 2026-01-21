/**
 * @param {string[]} words
 * @return {number}
 */
function maximumNumberOfStringPairs(words) {
  let result = 0;
  const set = new Set();
  for (const word of words) {
    if (set.has(word)) {
      set.delete(word);
      result++;
    } else {
      set.add(word[1] + word[0]);
    }
  }

  return result;
}
