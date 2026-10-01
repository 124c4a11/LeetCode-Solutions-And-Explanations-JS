/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
function findIndices(nums, indexDifference, valueDifference) {
  let minPrevNumNdx = 0;
  let maxPrevNumNdx = 0;
  for (let i = indexDifference; i < nums.length; i++) {
    const prevNdx = i - indexDifference;
    const prevNum = nums[prevNdx];
    const num = nums[i];

    if (prevNum < nums[minPrevNumNdx]) minPrevNumNdx = prevNdx;
    else if (prevNum > nums[maxPrevNumNdx]) maxPrevNumNdx = prevNdx;

    if (num - nums[minPrevNumNdx] >= valueDifference) {
      return [minPrevNumNdx, i];
    }

    if (nums[maxPrevNumNdx] - num >= valueDifference) {
      return [maxPrevNumNdx, i];
    }
  }

  return [-1, -1];
}
