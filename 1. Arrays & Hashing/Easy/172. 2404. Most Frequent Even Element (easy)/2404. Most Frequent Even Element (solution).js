/**
 * @param {number[]} nums
 * @return {number}
 */
function mostFrequentEven(nums) {
  let mostFreqEven = -1;
  let maxFreq = 0;
  const numToFreq = new Map();
  for (const num of nums)
  {
    if ((num & 1) === 1) continue;

    const freq = (numToFreq.get(num) ?? 0) + 1;

    numToFreq.set(num, freq);

    if (freq < maxFreq) continue;

    if (
      freq === maxFreq
      && num >= mostFreqEven
    ) continue;

    maxFreq = freq;
    mostFreqEven = num;
  }

  return mostFreqEven;
}
