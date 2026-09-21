/**
 * @param {number[]} nums
 * @return {number[]}
 */
function distinctDifferenceArray(nums) {
  const n = nums.length;

  const prefixUniqueCnt = new Int32Array(n);
  const uniqueSet = new Set();
  for (let i = 0; i < n; i++) {
    uniqueSet.add(nums[i]);
    prefixUniqueCnt[i] = uniqueSet.size;
  }

  uniqueSet.clear();

  const diffArr = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    diffArr[i] = prefixUniqueCnt[i] - uniqueSet.size;
    uniqueSet.add(nums[i]);
  }

  return diffArr;
}
