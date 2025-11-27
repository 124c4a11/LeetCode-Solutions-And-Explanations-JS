/**
 * @param {number[]} nums
 * @return {number}
 */
function largestUniqueNumber(nums) {
  const uniqueSet = new Set();
  for (const num of nums) {
    if (uniqueSet.has(num)) {
      uniqueSet.delete(num);
    } else {
      uniqueSet.add(num);
    }
  }

  let largest = -1;
  for (const num of uniqueSet) {
    largest = Math.max(largest, num);
  }

  return largest;
}
