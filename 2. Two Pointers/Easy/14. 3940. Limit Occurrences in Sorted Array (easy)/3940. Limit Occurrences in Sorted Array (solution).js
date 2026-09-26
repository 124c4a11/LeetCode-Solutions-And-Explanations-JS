/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function limitOccurrences(nums, k) {
  let currNumFreq = 1;
  let l = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r - 1] !== nums[r]) currNumFreq = 1;
    else currNumFreq++;

    if (currNumFreq > k) continue;

    nums[l] = nums[r];
    l++;
  }

  return nums.slice(0, l);
}
