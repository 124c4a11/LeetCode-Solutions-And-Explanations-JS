/**
 * @param {number} n
 * @return {number}
 */
function pivotInteger(n) {
  const sum = n * (n + 1) / 2;
  const pivot = Math.sqrt(sum);

  return pivot % 1 ? -1 : pivot;
}
