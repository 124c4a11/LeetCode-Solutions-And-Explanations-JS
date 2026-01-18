/**
 * @param {string} s
 * @return {boolean}
 */
function hasSameDigits(s) {
  const nums = Array.from(s, (str) => Number(str));
  for (let currLen = nums.length; currLen > 2; currLen--) {
    for (let i = 0; i < currLen - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
  }

  return nums[0] === nums[1];
}
