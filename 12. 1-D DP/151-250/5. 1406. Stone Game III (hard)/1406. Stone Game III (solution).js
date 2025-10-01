/**
 * @param {number[]} stoneValue
 * @return {string}
 */
function stoneGameIII(stoneValue) {
  const n = stoneValue.length;

  const dp = new Array(4).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let total = 0;
    dp[i % 4] = -Infinity;
    for (let j = i; j < Math.min(i + 3, n); j++) {
      total += stoneValue[j];
      dp[i % 4] = Math.max(
        dp[i % 4],
        total - dp[(j + 1) % 4]
      );
    }
  }

  if (dp[0] === 0) return 'Tie';

  return dp[0] > 0 ? 'Alice' : 'Bob';
}
