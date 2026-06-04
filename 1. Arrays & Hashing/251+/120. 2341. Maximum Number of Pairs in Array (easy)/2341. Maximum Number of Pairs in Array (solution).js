/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberOfPairs(nums) {
  const numToFreq = new Int32Array(101);
  let pairsCnt = 0;
  for (const num of nums) {
    numToFreq[num]++;

    if ((numToFreq[num] & 1) === 1) continue;

    pairsCnt++;
    numToFreq[num] = 0;
  }

  return [pairsCnt, nums.length - pairsCnt * 2];
}
