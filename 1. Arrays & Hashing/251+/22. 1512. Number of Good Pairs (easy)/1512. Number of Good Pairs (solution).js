/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  let result = 0;
  const numFreq = new Map();
  for (const num of nums) {
    const freq = numFreq.get(num) ?? 0;

    result += freq;
    numFreq.set(num, freq + 1);
  }

  return result;
};
