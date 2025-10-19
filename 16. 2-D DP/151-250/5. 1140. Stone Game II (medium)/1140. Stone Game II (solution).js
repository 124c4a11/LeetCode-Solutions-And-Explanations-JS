/**
 * @param {number[]} piles
 * @return {number}
 */
function stoneGameII(piles) {
  const n = piles.length;

  const suffixSum = new Int32Array(n);
  suffixSum[n - 1] = piles[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = piles[i] + suffixSum[i + 1];
  }


  const dp = Array.from(
    { length: n },
    () => new Array(n + 1).fill(-1)
  );

  function dfs(i, M) {
    if (i === n) return 0;
    if (dp[i][M] !== -1) return dp[i][M];

    let result = 0;
    for (let X = 1; X <= 2 * M; X++) {
      if (i + X > n) break;

      result = Math.max(
        result,
        suffixSum[i] - dfs(i + X, Math.max(M, X))
      );
    }

    return (dp[i][M] = result);
  };

  return dfs(0, 1);
}
