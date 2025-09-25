/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const dp = new Int32Array(n + 1).fill(n);
  dp[0] = 0;

  for (let target = 1; target <= n; target++) {
    for (let s = 1; s * s <= target; s++) {
      dp[target] = Math.min(
        dp[target],
        1 + dp[target - s * s]
      );
    }
  }

  return dp[n];
}
