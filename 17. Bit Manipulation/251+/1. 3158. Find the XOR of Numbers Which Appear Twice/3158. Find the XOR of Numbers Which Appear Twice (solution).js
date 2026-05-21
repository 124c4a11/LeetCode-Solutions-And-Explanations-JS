/**
 * @param {number[]} nums
 * @return {number}
 */
function duplicateNumbersXOR(nums) {
  let duplicateXOR = 0;
  const numToFreq = new Int32Array(51);
  for (const num of nums)
  {
    numToFreq[num]++;

    if (numToFreq[num] == 2) duplicateXOR ^= num;
  }

  return duplicateXOR;
}
