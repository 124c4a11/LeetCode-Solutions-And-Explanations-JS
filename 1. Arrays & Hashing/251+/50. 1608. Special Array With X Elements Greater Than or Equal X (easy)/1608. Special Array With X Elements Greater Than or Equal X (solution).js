/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  const n = nums.length;

  const valueCounts = new Int32Array(n + 1);
  for (const num of nums) {
    const i = Math.min(num, n);

    valueCounts[i]++;
  }

  let totalRight = 0;
  for (let i = n; i >= 0; i--) {
    totalRight += valueCounts[i];

    if (totalRight === i) return totalRight;
  }

  return -1;
}
