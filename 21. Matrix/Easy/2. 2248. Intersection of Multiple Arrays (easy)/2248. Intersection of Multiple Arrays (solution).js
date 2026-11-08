/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function intersection(nums) {
  const numToFreq = new Int32Array(1001);
  for (const row of nums) {
    for (const num of row) numToFreq[num]++;
  }

  const intersections = [];
  for (let num = 1; num < 1001; num++) {
    if (numToFreq[num] !== nums.length) continue;

    intersections.push(num);
  }

  return intersections;
}
