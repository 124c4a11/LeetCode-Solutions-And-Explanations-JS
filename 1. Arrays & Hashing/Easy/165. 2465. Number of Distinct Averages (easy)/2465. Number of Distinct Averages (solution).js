/**
 * @param {number[]} nums
 * @return {number}
 */
function distinctAverages(nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let uniqueSumsCnt = 0;
  const sumToSeen = new Array(201);
  for (let i = 0; i < (n >> 1); i++)
  {
    const sum = nums[i] + nums[n - i - 1];

    if (sumToSeen[sum]) continue;

    sumToSeen[sum] = true;
    uniqueSumsCnt++;
  }

  return uniqueSumsCnt;
}
