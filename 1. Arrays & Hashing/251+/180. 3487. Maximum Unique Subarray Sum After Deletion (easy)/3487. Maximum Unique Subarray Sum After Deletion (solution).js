/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
  const numToSeen = new Array(101);
  let maxNum = -Infinity;
  for (const num of nums) {
    if (num > maxNum) maxNum = num;

    if (num < 0) continue;

    numToSeen[num] = true;
  }

  if (maxNum <= 0) return maxNum;

  let uniqueSubarraySum = 0;
  for (let num = 1; num <= maxNum; num++)
  {
    if (numToSeen[num]) uniqueSubarraySum += num;
  }

  return uniqueSubarraySum;
}
