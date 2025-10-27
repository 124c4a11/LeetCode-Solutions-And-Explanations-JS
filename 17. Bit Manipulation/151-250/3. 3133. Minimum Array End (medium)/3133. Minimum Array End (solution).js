/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
function minEnd(n, x) {
  n = BigInt(n - 1);

  let result = BigInt(x);
  let i_x = 1n;
  let i_n = 1n;
  while (i_n <= n) {
    if ((i_x & result) === 0n) {
      if ((i_n & n) !== 0n) {
        result = result | i_x;
      }

      i_n = i_n << 1n;
    }

    i_x = i_x << 1n;
  }

  return Number(result);
}
