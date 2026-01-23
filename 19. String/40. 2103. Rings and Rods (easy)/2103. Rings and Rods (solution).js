/**
 * @param {string} rings
 * @return {number}
 */
function countPoints(rings) {
  const rods = Array.from({ length: 10 }, () => new Set());
  for (let i = 0; i < rings.length; i += 2) {
    rods[rings[i + 1]].add(rings[i]);
  }

  let result = 0;
  for (const rod of rods) {
    if (rod.size === 3) result++;
  }

  return result;
}
