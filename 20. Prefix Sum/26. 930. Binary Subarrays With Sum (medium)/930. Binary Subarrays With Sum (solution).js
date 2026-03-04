/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
  let result = 0;
  let prefixSum = 0;
  const prefixSumToFreq = new Int32Array(nums.length + 1);
  prefixSumToFreq[0] = 1;
  for (const num of nums) {
    prefixSum += num;

    if (prefixSum >= goal) {
      result += prefixSumToFreq[prefixSum - goal];
    }

    prefixSumToFreq[prefixSum]++;
  }

  return result;
}
