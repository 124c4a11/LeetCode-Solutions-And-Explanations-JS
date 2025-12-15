/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
function findWordsContaining(words, x) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) result.push(i);
  }

  return result;
}
