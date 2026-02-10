/**
 * @param {number[]} nums
 * @return {number}
 */
function returnToBoundaryCount(nums) {
  let result = 0;
  let delta = 0;
  for (const num of nums) {
    delta += num;
    if (delta === 0) result++;
  }

  return result;
}
