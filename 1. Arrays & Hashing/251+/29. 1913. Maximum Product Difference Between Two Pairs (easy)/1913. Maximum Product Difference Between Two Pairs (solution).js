/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
  if (nums.length < 2) return nums[0] ?? 0;
  
  let max1 = 0;
  let max2 = 0;
  let min1 = Infinity;
  let min2 = Infinity;
  for (const num of nums) {
    if (num > max1) {
      max2 = max1; 
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return max1 * max2 - min1 * min2;
}
