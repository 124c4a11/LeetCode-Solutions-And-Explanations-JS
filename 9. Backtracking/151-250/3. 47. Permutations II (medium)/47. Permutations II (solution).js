/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  const result = [];
  const perm = [];
  const visit = new Array(n);

  !function dfs() {
    if (perm.length === n) {
      result.push([...perm]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (
        visit[i]
        || (
          i > 0
          && nums[i] === nums[i - 1]
          && !visit[i - 1]
        )
      ) continue;

      visit[i] = true;
      perm.push(nums[i]);

      dfs();

      visit[i] = false;
      perm.pop();
    }
  }();

  return result;
}
