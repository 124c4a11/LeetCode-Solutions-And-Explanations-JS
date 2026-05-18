/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
  let maxFreq = 0;
  let maxFreqCnt = 0;
  const numToFreq = new Map();
  for (const num of nums) {
    const currFreq = (numToFreq.get(num) ?? 0) + 1;

    numToFreq.set(num, currFreq);

    if (currFreq > maxFreq) {
      maxFreq = currFreq;
      maxFreqCnt = 1;
    } else if (currFreq === maxFreq) {
      maxFreqCnt++;
    }
  }

  return maxFreq * maxFreqCnt;
}
