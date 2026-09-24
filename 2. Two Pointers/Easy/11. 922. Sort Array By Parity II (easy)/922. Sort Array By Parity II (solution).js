/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
  let oddNdx = 1;
  for (let evenNdx = 0; evenNdx < nums.length; evenNdx += 2) {
    if ((nums[evenNdx] & 1) === 0) continue;

    while ((nums[oddNdx] & 1) === 1) oddNdx += 2;

    const tmp = nums[evenNdx];

    nums[evenNdx] = nums[oddNdx];
    nums[oddNdx] = tmp;
  }

  return nums;
}
