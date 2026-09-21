/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
function mostFrequent(nums, key) {
  let mostFrequentTarget = 0;
  let maxTargetFreq = 0;
  const targetToFreq = new Int32Array(1001);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== key) continue;

    const target = nums[i + 1];

    const targetFreq = ++targetToFreq[target];

    if (targetFreq > maxTargetFreq) {
      mostFrequentTarget = target;
      maxTargetFreq = targetFreq;
    }
  }

  return mostFrequentTarget;
}
