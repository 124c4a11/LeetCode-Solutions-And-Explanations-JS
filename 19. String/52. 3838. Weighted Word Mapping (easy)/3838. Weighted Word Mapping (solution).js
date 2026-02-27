/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
function mapWordWeights(words, weights) {
  const result = [];
  for (const word of words) {
    let wordWeight = 0;
    for (const char of word) {
      wordWeight += weights[char.codePointAt(0) - 97];
    }

    wordWeight %= 26;

    result.push(String.fromCodePoint(25 - wordWeight + 97));
  }

  return result.join('');
}
