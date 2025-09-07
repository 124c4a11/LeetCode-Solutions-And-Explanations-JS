/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k) return false;

  const target = sum / k;

  nums.sort((a, b) => b - a);
  if (nums[0] > target) return false;

  const n = nums.length;
  const visited = new Array(n);

  function dfs(i, k, subsetSum) {
    if (k === 0) return true;
    if (subsetSum === target) {
      return dfs(0, k - 1, 0);
    }

    for (let j = i; j < n; j++) {
      if (
        visited[j]
        || subsetSum + nums[j] > target
      ) continue;

      visited[j] = true;

      if (dfs(j + 1, k, subsetSum + nums[j])) return true;

      visited[j] = false;

      if (!subsetSum) return false;
    }

    return false;
  };

  return dfs(0, k, 0);
}
