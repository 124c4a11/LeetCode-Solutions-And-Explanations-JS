/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
  const duplicates = [];
  const numToSeen = new Int32Array(nums.length);
  for (const num of nums) {
    if (numToSeen[num]) duplicates.push(num);
    else numToSeen[num] = 1;
  }

  return duplicates;
}
