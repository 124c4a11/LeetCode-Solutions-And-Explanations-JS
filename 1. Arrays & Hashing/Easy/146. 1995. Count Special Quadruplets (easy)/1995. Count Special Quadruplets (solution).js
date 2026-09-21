/**
 * @param {number[]} nums
 * @return {number}
 */
function countQuadruplets(nums) {
  const n = nums.length;

  let quadrupletsCnt = 0;
  const diffToCnt = new Int32Array(201);
  for (let b = n - 1; b >= 1; b--) {
    let c = b + 1;

    for (let d = c + 1; d < n; d++) {
      const diff = nums[d] - nums[c];

      if (diff >= 0) diffToCnt[diff]++;
    }

    for (let a = 0; a < b; a++) {
      quadrupletsCnt += diffToCnt[nums[a] + nums[b]];
    }
  }

  return quadrupletsCnt;
}
