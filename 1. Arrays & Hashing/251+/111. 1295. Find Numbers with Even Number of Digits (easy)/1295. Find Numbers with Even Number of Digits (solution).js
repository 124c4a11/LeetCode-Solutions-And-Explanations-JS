/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let evenDigitsCnt = 0;
  for (const num of nums) {
    const digitsCnt = `${num}`.length;

    if ((digitsCnt & 1) == 0) evenDigitsCnt++;
  }

  return evenDigitsCnt;
}
