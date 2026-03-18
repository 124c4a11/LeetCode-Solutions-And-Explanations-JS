/**
 * @param {number[]} nums
 * @return {number[]}
 */
function transformArray(nums) {
  const zerosArr = [];
  const onesArr = [];
  for (const num of nums) {
    if (num & 1) onesArr.push(1);
    else zerosArr.push(0);
  }

  return zerosArr.concat(onesArr);
}
