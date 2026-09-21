/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  const uniqueNums = new Set([k]);
  for (const num of nums) {
    if (num < k) return -1;

    uniqueNums.add(num);
  }

  return uniqueNums.size - 1;
}
