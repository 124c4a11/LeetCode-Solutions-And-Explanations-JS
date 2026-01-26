/**
 * @param {number} n
 * @return {string}
 */
function concatHex36(n) {
  return ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase();
}
