/**
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums) {
  let elementSum = 0;
  let digitSum = 0;
  for (let num of nums) {
    elementSum += num;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
  }

  return Math.abs(elementSum - digitSum);
}
