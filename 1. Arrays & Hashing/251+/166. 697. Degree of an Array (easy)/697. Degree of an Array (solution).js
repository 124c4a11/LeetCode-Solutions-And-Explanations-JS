/**
 * @param {number[]} nums
 * @return {number}
 */
function findShortestSubArray(nums) {
  let minSubarrayLength = Infinity;
  let maxFreq = 0;
  const numToStats = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const numStats = numToStats.get(num) ?? { freq: 0, firstNdx: i };
    const currFreq = ++numStats.freq;
    const firstNdx = numStats.firstNdx;

    numToStats.set(num, numStats);

    if (currFreq > maxFreq) {
      maxFreq = currFreq;
      minSubarrayLength =  i - firstNdx + 1;
    } else if (currFreq === maxFreq)
    {
      minSubarrayLength = Math.min(minSubarrayLength, i - firstNdx + 1);
    }
  }

  return minSubarrayLength;
}
