/**
 * @param {number[]} nums
 * @return {number}
 */
function smallestIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let digitSum = 0;
    let num = nums[i];
    while (num) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    if (digitSum == i) return i;
  }

  return -1;
}
