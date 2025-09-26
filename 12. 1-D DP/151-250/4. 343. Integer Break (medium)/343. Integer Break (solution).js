/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  const dp = new Int32Array(n + 1);
  dp[1] = 1;

  for (let num = 2; num <= n; num++) {
    dp[num] = num === n ? 0 : num;

    for (let i = 1; i < num; i++) {
      dp[num] = Math.max(
        dp[num],
        dp[i] * dp[num - i]
      );
    }
  }

  return dp[n];
}
