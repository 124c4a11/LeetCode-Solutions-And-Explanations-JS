/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countMajoritySubarrays(nums, target) {
  let result = 0;
  let endingSubarraysCnt = 0;
  let targetBalance = 0;
  const targetBalanceToFreq = new Map([[0, 1]]);
  for (const num of nums) {
    if (num === target) {
      endingSubarraysCnt +=
        targetBalanceToFreq.get(targetBalance);
      targetBalance++;
    } else {
      endingSubarraysCnt -=
        targetBalanceToFreq.get(targetBalance - 1) ?? 0;
      targetBalance--;
    }

    result += endingSubarraysCnt;
    targetBalanceToFreq.set(
      targetBalance,
      (targetBalanceToFreq.get(targetBalance) ?? 0) + 1
    );
  }

  return result;
}
