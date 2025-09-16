/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  const orderIndex = new Int32Array(26);
  for (let i = 0; i < order.length; i++) {
    orderIndex[order.charCodeAt(i) - 97] = i;
  }

  for (let i = 1; i < words.length; i++) {
    const w1 = words[i - 1];
    const w2 = words[i];

    for (let j = 0; j < w1.length; j++) {
      if (j === w2.length) return false;

      if (w1[j] === w2[j]) continue;

      if (
        orderIndex[w1.charCodeAt(j) - 97]
        > orderIndex[w2.charCodeAt(j) - 97]
      ) return false;

      break;
    }
  }

  return true;
}
