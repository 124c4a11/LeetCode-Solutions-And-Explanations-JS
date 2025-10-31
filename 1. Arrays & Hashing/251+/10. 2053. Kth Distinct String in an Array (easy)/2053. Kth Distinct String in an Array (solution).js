/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
function kthDistinct(arr, k) {
  const strToFreq = new Map();
  for (const str of arr) {
    strToFreq.set(str, (strToFreq.get(str) ?? 0) + 1);
  }

  for (const str of arr) {
    if (strToFreq.get(str) > 1) continue;

    k--;

    if (!k) return str;
  }

  return '';
};
