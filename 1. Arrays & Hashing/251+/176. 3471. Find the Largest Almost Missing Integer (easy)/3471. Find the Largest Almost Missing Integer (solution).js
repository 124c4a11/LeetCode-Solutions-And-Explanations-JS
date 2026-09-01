/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function largestInteger(nums, k) {
  let maxNum = 0;
  const numToFreq = new Int32Array(51);
  for (const num of nums) {
    numToFreq[num]++;
    maxNum = Math.max(maxNum, num);
  }

  if (nums.length === k) return maxNum;

  if (k === 1) {
    for (let num = maxNum; num >= 0; num--) {
      if (numToFreq[num] === 1) return num;
    }
  }

  const firstNum = nums[0];
  const firstNumFreq = numToFreq[firstNum];

  const lastNum = nums.at(-1);
  const lastNumFreq = numToFreq[lastNum];

  if (
    firstNumFreq === 1
    && lastNumFreq === 1
  ) return Math.max(firstNum, lastNum);

  if (firstNumFreq === 1) return firstNum;
  if (lastNumFreq === 1)  return lastNum;

  return -1;
}
