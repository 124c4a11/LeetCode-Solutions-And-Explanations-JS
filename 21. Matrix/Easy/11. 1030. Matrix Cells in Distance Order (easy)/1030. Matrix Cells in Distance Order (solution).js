/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
function allCellsDistOrder(rows, cols, rCenter, cCenter) {
  const maxDistance = rows + cols;

  const buckets = Array.from({ length: maxDistance }, () => []);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      buckets[Math.abs(r - rCenter) + Math.abs(c - cCenter)].push([r, c]);
    }
  }

  const result = [];
  for (const bucket of buckets) {
    for (const cell of bucket) result.push(cell);
  }

  return result;
}
