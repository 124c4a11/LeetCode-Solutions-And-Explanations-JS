/**
 * @param {number[]} nums
 * @return {number[]}
 */
function separateDigits(nums) {
  const digits = [];
  for (let num of nums) {
    const currDigits = [];
    while (num) {
      currDigits.push(num % 10);
      num = Math.floor(num / 10);
    }

    digits.push(...currDigits.reverse());
  }

  return digits;
}
