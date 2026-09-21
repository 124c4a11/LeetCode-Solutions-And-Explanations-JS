/**
 * @param {number[]} nums
 * @return {number}
 */
function largestUniqueNumber(nums) {
  const numToFreq = new Map();
  for (const num of nums) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  let largest = -1;
  for (const [num, freq] of numToFreq) {
    if (freq > 1) continue;
    largest = Math.max(largest, num);
  }

  return largest;
}
