/**
 * @param {number[][]} arrays
 * @return {number}
 */
function maxDistance(arrays) {
  let result = 0;
  let min = arrays[0][0];
  let max = arrays[0].at(-1);
  for (let i = 1; i < arrays.length; i++) {
    const currMin = arrays[i][0];
    const currMax = arrays[i].at(-1);

    result = Math.max(
      result,
      Math.abs(currMax - min),
      Math.abs(max - currMin)
    );

    min = Math.min(min, currMin);
    max = Math.max(max, currMax);
  }

  return result;
}
