/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canAliceWin(nums) {
  let singleDigitSum = 0;
  let doubleDigitSum = 0;
  for (const num of nums) {
    if (num < 10) singleDigitSum += num;
    else doubleDigitSum += num;
  }

  return singleDigitSum !== doubleDigitSum;
}
