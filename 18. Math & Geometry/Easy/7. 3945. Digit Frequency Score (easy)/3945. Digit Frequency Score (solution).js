/**
 * @param {number} n
 * @return {number}
 */
function digitFrequencyScore(n) {
  let score = 0;
  while (n) {
    score += n % 10;
    n = Math.floor(n / 10);
  }

  return score;
}
