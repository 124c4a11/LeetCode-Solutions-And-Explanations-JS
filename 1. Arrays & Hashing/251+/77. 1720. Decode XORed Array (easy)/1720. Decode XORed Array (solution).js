/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded, first) {
  const n = encoded.length;

  const original = new Array(n + 1);
  original[0] = first;
  for (let i = 0; i < n; i++) {
    original[i + 1] = encoded[i] ^ original[i];
  }

  return original;
}
