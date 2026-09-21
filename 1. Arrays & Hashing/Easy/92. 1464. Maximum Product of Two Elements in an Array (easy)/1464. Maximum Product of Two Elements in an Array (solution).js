/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let maxA = -Infinity;
  let maxB = -Infinity;
  for (const num of nums) {
    if (num > maxA) {
      maxB = maxA;
      maxA = num;
    } else if (num > maxB) {
      maxB = num;
    }
  }

  return (maxA - 1) * (maxB - 1);
}
