/**
 * @param {number[]} nums
 * @return {boolean}
 */
function divideArray(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }

  return !set.size;
};
