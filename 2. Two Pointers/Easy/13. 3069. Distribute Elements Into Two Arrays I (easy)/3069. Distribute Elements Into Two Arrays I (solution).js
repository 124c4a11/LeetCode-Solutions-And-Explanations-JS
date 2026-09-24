/**
 * @param {number[]} nums
 * @return {number[]}
 */
function resultArray(nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];
  for (let i = 2; i < nums.length; i++) {
    const currNum = nums[i];
    const arr1LastNum = arr1.at(-1);
    const arr2LastNum = arr2.at(-1);

    if (arr1LastNum > arr2LastNum) arr1.push(currNum);
    else arr2.push(currNum);
  }

  return arr1.concat(arr2);
}
