/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  const numToFreq = new Map();
  for (const num of arr) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  const freqSet = new Set();
  for (const pair of numToFreq) {
    const freq = pair[1];

    if (freqSet.has(freq)) return false;

    freqSet.add(freq);
  }

  return true;
}
