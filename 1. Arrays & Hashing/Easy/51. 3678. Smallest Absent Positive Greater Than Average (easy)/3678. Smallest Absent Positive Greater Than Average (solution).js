/**
 * @param {number[]} nums
 * @return {number}
 */
function smallestAbsent(nums) {
  const numToSeen = new Array(101);
  let sum = 0;
  for (const num of nums) {
    sum += num;

    if (num > 0) numToSeen[num] = true;
  }

  const average = Math.floor(sum / nums.length);

  for (let num = Math.max(1, average + 1); ; num++) {
    if (!numToSeen[num]) return num;
  }
}
