/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
  if (m * n !== original.length) return [];

  const result = new Array(m);
  let r = 0;
  for (let start = 0; start < original.length; start += n) {
    result[r++] = original.slice(start, start + n);
  }

  return result;
}
