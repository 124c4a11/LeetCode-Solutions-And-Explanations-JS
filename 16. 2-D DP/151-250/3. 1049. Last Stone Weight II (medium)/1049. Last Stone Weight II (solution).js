/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeightII(stones) {
  const stoneSum = stones.reduce((a, b) => a + b, 0);
  const target = Math.floor(stoneSum / 2);

  const dp = new Int32Array(target + 1);
  for (const stone of stones) {
    for (let t = target; t >= stone; t--) {
      dp[t] = Math.max(
        dp[t],
        dp[t - stone] + stone
      );
    }
  }

  return stoneSum - 2 * dp[target];
}
