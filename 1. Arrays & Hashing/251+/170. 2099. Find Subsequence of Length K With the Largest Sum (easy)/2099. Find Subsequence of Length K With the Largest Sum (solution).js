/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
  const indexedNums = Array.from(
    { length: nums.length },
    (_, i) => ({ ndx: i, num: nums[i] })
  );

  return indexedNums
    .sort((a, b) => b.num - a.num)
    .slice(0, k)
    .sort((a, b) => a.ndx - b.ndx)
    .map((stat) => stat.num);
}
