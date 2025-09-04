/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const result = [];

  !function dfs(start = 1, comb = []) {
    if (comb.length === k) {
      result.push([...comb]);
      return;
    }

    for (let i = start; i <= n; i++) {
      comb.push(i);
      dfs(i + 1, comb);
      comb.pop();
    }
  }();

  return result;
}
