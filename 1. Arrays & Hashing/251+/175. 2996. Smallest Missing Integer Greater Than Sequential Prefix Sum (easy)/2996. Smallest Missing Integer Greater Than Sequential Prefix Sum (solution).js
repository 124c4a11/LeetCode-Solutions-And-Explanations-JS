/**
 * @param {number[]} nums
 * @return {number}
 */
function missingInteger(nums) {
  const numToSeen = new Array(51);
  for (const num of nums) numToSeen[num] = true;

  let prefixSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1) break;

    prefixSum += nums[i];
  }

  for (let num = prefixSum; ; num++) {
    if (!numToSeen[num]) return num;
  }
}
