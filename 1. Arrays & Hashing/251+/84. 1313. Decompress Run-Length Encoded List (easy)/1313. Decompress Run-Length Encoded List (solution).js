/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const val = nums[i + 1];

    let freq = nums[i];
    while (freq--) result.push(val);
  }

  return result;
}
