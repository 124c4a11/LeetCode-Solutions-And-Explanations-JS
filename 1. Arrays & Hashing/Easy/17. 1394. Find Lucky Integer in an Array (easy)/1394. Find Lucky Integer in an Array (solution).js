/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  const numFreq = new Map();
  for (const num of arr) {
    numFreq.set(num, (numFreq.get(num) ?? 0) + 1);
  }

  let result = -1;
  numFreq.forEach((freq, num) => {
    if (num === freq) {
      result = Math.max(result, num);
    }
  });

  return result;
}
