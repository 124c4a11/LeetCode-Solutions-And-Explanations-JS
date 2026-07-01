/**
 * @param {number[]} nums
 * @return {number[]}
 */
function minDistinctFreqPair(nums) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) numToFreq[num]++;

  let x = 0;
  for (let num = 1; num < 101; num++) {
    if (numToFreq[num] === 0) continue;

    if (x === 0) {
      x = num;
    } else if (numToFreq[x] !== numToFreq[num]) {
      return [x, num];
    }
  }

  return [-1, -1];
}
