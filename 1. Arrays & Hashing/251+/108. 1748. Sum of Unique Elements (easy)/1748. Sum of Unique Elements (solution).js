/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) numToFreq[num]++;

  let uniqueSum = 0;
  for (let num = 1; num < 101; num++)
  {
    if (numToFreq[num] === 1) uniqueSum += num;
  }

  return uniqueSum;
}
