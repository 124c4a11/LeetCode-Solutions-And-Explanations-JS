/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
  let maxConsecutiveOnes = 0;
  let zeroCnt = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) zeroCnt++;

    while (zeroCnt > k) {
      if (nums[l] === 0) zeroCnt--;
      l++;
    }

    maxConsecutiveOnes = Math.max(maxConsecutiveOnes, r - l + 1);
  }

  return maxConsecutiveOnes;
}
