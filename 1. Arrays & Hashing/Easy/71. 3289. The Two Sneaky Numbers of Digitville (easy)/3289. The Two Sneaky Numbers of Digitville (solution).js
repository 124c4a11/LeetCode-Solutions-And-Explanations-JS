/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
  const duplicates = [];
  const numToSeen = new Int32Array(nums.length);
  for (const num of nums) {
    if (!numToSeen[num]) {
      numToSeen[num] = 1;
    } else {
      duplicates.push(num);
      if (duplicates.length === 2) break;
    }
  }

  return duplicates;
}
