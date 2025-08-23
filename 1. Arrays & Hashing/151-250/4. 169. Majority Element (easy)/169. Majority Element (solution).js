/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Boyer-Moore Voting Algorithm
 */
function majorityElement(nums) {

  let result = 0;
  let count = 0;
  for (const num of nums) {
    if (count === 0) result = num;

    count += (num === result) ? 1 : -1;
  }

  return result;
}