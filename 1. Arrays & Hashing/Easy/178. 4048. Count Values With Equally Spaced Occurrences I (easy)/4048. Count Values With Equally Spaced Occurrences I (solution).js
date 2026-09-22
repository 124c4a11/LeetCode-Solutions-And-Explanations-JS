/**
 * @param {number[]} nums
 * @return {number}
 */
function countSpecialIntegers(nums) {
  const numToIndices = new Array(101);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!numToIndices[num]) numToIndices[num] = [];

    numToIndices[num].push(i);
  }

  let specialIntegersCnt = 0;
  for (let num = 1; num < 101; num++) {
    const indices = numToIndices[num];

    if (
      !indices
      || indices.length !== 3
    ) continue;

    if (indices[1] - indices[0] === indices[2] - indices[1]) {
      specialIntegersCnt++;
    }
  }

  return specialIntegersCnt;
}
