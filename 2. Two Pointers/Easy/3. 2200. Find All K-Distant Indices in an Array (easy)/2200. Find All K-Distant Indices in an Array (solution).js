/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
function findKDistantIndices(nums, key, k) {
  const n = nums.length;

  const kDistantIndices = [];
  let lastAddedNdx = -1;
  for (let j = 0; j < n; j++) {
    if (nums[j] !== key) continue;

    const start = Math.max(0, j - k);
    const end = Math.min(n - 1, j + k);

    for (let i = Math.max(start, lastAddedNdx + 1); i <= end; i++) {
      kDistantIndices.push(i);
      lastAddedNdx = i;
    }
  }

  return kDistantIndices;
}
