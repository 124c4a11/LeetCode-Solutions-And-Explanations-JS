/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const n = candies.length;
  const max = Math.max(...candies);

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = candies[i] + extraCandies >= max;
  }

  return result;
}
