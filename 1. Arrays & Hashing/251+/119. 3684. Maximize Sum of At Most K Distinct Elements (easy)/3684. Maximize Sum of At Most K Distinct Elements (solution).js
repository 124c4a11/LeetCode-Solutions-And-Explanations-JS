/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxKDistinct(nums, k) {
  nums.sort((a, b) => b - a);

  const maxKDistinctNums = [];
  for (const num of nums) {
    if (maxKDistinctNums.at(-1) === num) continue;

    maxKDistinctNums.push(num);

    if (--k === 0) break;
  }

  return maxKDistinctNums;
}
