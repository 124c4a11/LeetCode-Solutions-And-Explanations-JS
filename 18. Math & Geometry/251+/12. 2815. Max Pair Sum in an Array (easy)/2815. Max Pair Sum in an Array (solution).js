/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
  const n = nums.length;

  const maxDigits = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    maxDigits[i] = getMaxDigit(nums[i]);
  }

  let maxSum = -1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (maxDigits[i] != maxDigits[j]) continue;

      maxSum = Math.max(maxSum, nums[i] + nums[j]);
    }
  }

  return maxSum;
}

function getMaxDigit(num) {
  let maxDigit = 0;
  while (num > 0) {
    maxDigit = Math.max(maxDigit, num % 10);
    num = Math.floor(num / 10);
  }

  return maxDigit;
}
