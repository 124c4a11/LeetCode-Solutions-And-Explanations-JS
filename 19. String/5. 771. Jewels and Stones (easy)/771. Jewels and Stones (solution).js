/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  const jewelSet = new Set();
  for (const jewel of jewels) {
    jewelSet.add(jewel);
  }

  let result = 0;
  for (const stone of stones) {
    if (jewelSet.has(stone)) result++;
  }

  return result;
}
