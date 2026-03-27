/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
function stableMountains(height, threshold) {
  const stableIndices = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) stableIndices.push(i);
  }

  return stableIndices;
}
