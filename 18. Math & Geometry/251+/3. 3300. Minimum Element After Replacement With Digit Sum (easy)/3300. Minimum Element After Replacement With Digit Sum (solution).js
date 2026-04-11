/**
 * @param {number[]} nums
 * @return {number}
 */
function minElement(nums) {
  let minDigitSum = Infinity;
  for (let num of nums) {
    let currDigitSum = 0;
    while (num > 0) {
      currDigitSum += num % 10;
      num = Math.floor(num / 10);
    }

    minDigitSum = Math.min(minDigitSum, currDigitSum);
  }

  return minDigitSum;
}
