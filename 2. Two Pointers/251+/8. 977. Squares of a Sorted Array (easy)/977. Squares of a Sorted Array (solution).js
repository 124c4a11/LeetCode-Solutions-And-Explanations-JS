/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  const n = nums.length;

  const squares = new Array(n);
  let i = n - 1;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const lSquare = nums[l] ** 2;
    const rSquare = nums[r] ** 2;

    if (lSquare > rSquare) {
      squares[i] = lSquare;
      l++;
    } else {
      squares[i] = rSquare;
      r--;
    }

    i--;
  }

  return squares;
}
