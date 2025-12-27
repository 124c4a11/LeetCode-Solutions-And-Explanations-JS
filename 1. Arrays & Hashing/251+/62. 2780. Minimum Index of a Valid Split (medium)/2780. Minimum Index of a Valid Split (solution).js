/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumIndex(nums) {
  const n = nums.length;

  let majority = 0;
  let cnt = 0;
  for (const num of nums) {
    if (cnt === 0) majority = num;
    cnt += num === majority ? 1 : -1;
  }

  let leftMajorityCnt = 0;
  let rightMajorityCnt = nums.filter(
    (x) => x === majority
  ).length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== majority) continue;

    leftMajorityCnt++;
    rightMajorityCnt--;

    const leftLen = i + 1;
    const rightLen = n - i - 1;

    if (
      leftMajorityCnt * 2 > leftLen
      && rightMajorityCnt * 2 > rightLen
    ) return i;
  }

  return -1;
}
