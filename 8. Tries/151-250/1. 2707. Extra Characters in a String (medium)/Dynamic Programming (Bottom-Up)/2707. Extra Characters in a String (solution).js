/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
  const n = s.length;

  const dp = new Int32Array(n + 1);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = 1 + dp[i + 1];

    for (let word of dictionary) {
      if (!s.startsWith(word, i)) continue;

      dp[i] = Math.min(dp[i], dp[i + word.length]);
    }
  }

  return dp[0];
}
