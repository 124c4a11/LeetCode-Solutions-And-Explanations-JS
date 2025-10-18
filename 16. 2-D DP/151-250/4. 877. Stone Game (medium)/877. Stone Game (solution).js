/**
 * @param {number[]} piles
 * @return {boolean}
 */
function stoneGame(piles) {
  const n = piles.length;

  const dp = new Int32Array(n);
  for (let l = n - 1; l >= 0; l--) {
    for (let r = l; r < n; r++) {
      const even = (r - l) % 2 === 0;
      const leftPile = even ? piles[l] : 0;
      const rightPile = even ? piles[r] : 0;

      if (l === r) {
        dp[r] = leftPile;
      } else {
        dp[r] = Math.max(
          dp[r] + leftPile,
          dp[r - 1] + rightPile
        );
      }
    }
  }

  const total = piles.reduce((a, b) => a + b, 0);
  const aliceScore = dp[n - 1];

  return aliceScore > total - aliceScore;
}
