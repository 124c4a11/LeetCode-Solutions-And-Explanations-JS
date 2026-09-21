/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumDistance(nums) {
  const numToSeenIndices = new Array(101);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!numToSeenIndices[num]) {
      numToSeenIndices[num] = [];
    }

    numToSeenIndices[num].push(i);
  }

  let minDistance = Infinity;
  for (const num of nums) {
    const indices = numToSeenIndices[num];

    if (indices.length < 3) continue;

    for (let i = 0; i < indices.length - 2; i++) {
      const a = indices[i];
      const b = indices[i + 1];
      const c = indices[i + 2];

      const currDistance =
        Math.abs(a - b)
        + Math.abs(b - c)
        + Math.abs(c - a);

      minDistance = Math.min(minDistance, currDistance);
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
}
