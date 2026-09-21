/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sumDivisibleByK(nums, k) {
  const numToFreq = new Int32Array(101);
  for (const num of nums) numToFreq[num]++;

  let sumForDivisibleByK = 0;
  for (let num = 1; num < 101; num++) {
    const freq = numToFreq[num];

    if (!freq || freq % k) continue;

    sumForDivisibleByK += num * freq;
  }

  return sumForDivisibleByK;
}
