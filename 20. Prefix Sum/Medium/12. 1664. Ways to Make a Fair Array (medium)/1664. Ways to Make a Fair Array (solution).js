/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToMakeFair(nums) {
  const n = nums.length;

  let rightEvenSum = 0;
  let rightOddSum = 0;
  for (let i = 0; i < n; ++i) {
    if (i % 2 === 0) rightEvenSum += nums[i];
    else rightOddSum += nums[i];
  }

  let fairCnt = 0;
  let leftEvenSum = 0;
  let leftOddSum = 0;
  for (let i = 0; i < n; ++i) {
    if (i % 2 === 0) rightEvenSum -= nums[i];
    else rightOddSum -= nums[i];

    if (leftEvenSum + rightOddSum === leftOddSum + rightEvenSum) {
      fairCnt++;
    }

    if (i % 2 === 0) leftEvenSum += nums[i];
    else leftOddSum += nums[i];
  }

  return fairCnt;
}
