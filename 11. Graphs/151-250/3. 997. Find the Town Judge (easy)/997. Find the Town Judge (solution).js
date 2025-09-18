/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  const delta = new Int32Array(n + 1);
  for (const [src, dst] of trust) {
    delta[src]--;
    delta[dst]++;
  }

  for (let i = 1; i <= n; i++) {
    if (delta[i] === n - 1) return i;
  }

  return -1;
}
