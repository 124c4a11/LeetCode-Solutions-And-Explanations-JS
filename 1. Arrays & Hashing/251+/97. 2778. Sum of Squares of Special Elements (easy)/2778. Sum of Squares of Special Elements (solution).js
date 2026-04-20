/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfSquares(nums) {
  const n = nums.length;

  let squaresSum = 0;
  for (let i = 0; i < n; i++) {
    if (n % (i + 1) === 0) {
      squaresSum += nums[i] ** 2;
    }
  }

  return squaresSum;
}
