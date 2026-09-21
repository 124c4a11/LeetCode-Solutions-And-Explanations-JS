/**
 * @param {number[]} nums
 * @return {number}
 */
function unequalTriplets(nums) {
  const numToFreq = new Map();
  for (const num of nums) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  let tripletsCnt = 0;
  let leftElementsCnt = 0;
  let rightElementsCnt = nums.length;
  for (const pair of numToFreq) {
    const freq = pair[1];

    rightElementsCnt -= freq;
    tripletsCnt += leftElementsCnt * freq * rightElementsCnt;
    leftElementsCnt += freq;
  }

  return tripletsCnt;
}
