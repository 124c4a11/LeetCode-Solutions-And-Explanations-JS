/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
}
