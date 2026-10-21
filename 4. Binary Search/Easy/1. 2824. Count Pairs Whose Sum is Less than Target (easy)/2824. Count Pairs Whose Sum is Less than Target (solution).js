/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countPairs(nums, target) {
  nums.sort((a, b) => a - b);

  function binarySearchFirstInvalidNdx(searchValue, rightBoundary) {
    let firstInvalidNdx = rightBoundary;
    let l = 0;
    let r = rightBoundary - 1;
    while (l <= r) {
      const midd = Math.floor(l + (r - l) / 2);

      if (nums[midd] >= searchValue) {
        firstInvalidNdx = midd;
        r = midd - 1;
      } else {
        l = midd + 1;
      }
    }

    return firstInvalidNdx;
  }

  let pairsCnt = 0;
  for (let j = 0; j < nums.length; j++) {
    pairsCnt += binarySearchFirstInvalidNdx(target - nums[j], j);
  }

  return pairsCnt;
}
