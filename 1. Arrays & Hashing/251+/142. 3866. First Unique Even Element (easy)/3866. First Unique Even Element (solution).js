/**
 * @param {number[]} nums
 * @return {number}
 */
function firstUniqueEven(nums) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) numToFreq[num]++;

  for (const num of nums) {
    if (
      (num & 1) === 0
      && numToFreq[num] === 1
    ) return num;
  }

  return -1;
}
