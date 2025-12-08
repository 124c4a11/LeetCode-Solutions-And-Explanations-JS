/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  const numToFreq = new Map();
  for (const num of nums) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  return nums.sort((a, b) => {
    const aFreq = numToFreq.get(a);
    const bFreq = numToFreq.get(b);

    if (aFreq === bFreq) return b - a;

    return aFreq - bFreq;
  });
}
