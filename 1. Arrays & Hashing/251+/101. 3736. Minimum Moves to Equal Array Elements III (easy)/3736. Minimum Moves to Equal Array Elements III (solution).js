/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
  const max = Math.max(...nums);

  let totalMoves = 0;
  for (const num of nums) {
    totalMoves += max - num;
  }

  return totalMoves;
}
