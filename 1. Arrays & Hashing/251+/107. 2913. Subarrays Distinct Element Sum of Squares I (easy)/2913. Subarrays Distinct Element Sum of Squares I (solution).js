/**
 * @param {number[]} nums
 * @return {number}
 */
function sumCounts(nums) {
  let n = nums.length;

  let squaresSum = 0;
  for (let i = 0; i < n; i++) {
    const numToFreq = new Int32Array(101);
    let distinctCnt = 0;
    for (let j = i; j < n; j++) {
      numToFreq[nums[j]]++;

      if (numToFreq[nums[j]] === 1) distinctCnt++;

      squaresSum += distinctCnt ** 2;
    }
  }

  return squaresSum;
}
