/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
  const maxCanEat = candyType.length / 2;
  const uniqueTypesCnt = new Set(candyType).size;

  return Math.min(maxCanEat, uniqueTypesCnt);
}
