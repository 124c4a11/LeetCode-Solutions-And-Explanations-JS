/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
  const result = new Array(n * 2);
  let i = 0;
  for (let j = 0; j < n; j++) {
    result[i++] = nums[j];
    result[i++] = nums[n + j];
  }

  return result;
}
