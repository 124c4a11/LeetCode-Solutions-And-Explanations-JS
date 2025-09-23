/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  if (n < 3) return !n ? 0 : 1;

  const dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i % 3] = dp[0] + dp[1] + dp[2];
  }

  return dp[n % 3];
}
