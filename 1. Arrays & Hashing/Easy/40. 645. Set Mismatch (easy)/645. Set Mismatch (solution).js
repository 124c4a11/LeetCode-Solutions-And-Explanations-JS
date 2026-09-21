/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  const result = [0, 0];
  for (const num of nums) {
    const absNum = Math.abs(num);

    if (nums[absNum - 1] < 0) {
      result[0] = absNum;
    } else {
      nums[absNum - 1] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] > 0
      && i + 1 !== result[0]
    ) {
      result[1] = i + 1;
      return result;
    }
  }

  return result;
}
