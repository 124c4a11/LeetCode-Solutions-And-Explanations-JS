/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  const numToFreq = new Map();
  for (const num of nums) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  let maxLength = 0;
  for (const pair of numToFreq) {
    const currNum = pair[0];
    const currNumFreq = pair[1];
    const nextNum = currNum + 1;
    const nextNumFreq = numToFreq.get(nextNum);

    if (!nextNumFreq) continue;

    const currLength = currNumFreq + nextNumFreq;

    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength;
}
