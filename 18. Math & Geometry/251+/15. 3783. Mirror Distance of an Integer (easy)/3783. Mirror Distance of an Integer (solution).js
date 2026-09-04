/**
 * @param {number} n
 * @return {number}
 */
function mirrorDistance(n) {
  return Math.abs(n - reverse(n));
}

function reverse(x) {
  let y = 0;
  while (x > 0) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return y;
}
