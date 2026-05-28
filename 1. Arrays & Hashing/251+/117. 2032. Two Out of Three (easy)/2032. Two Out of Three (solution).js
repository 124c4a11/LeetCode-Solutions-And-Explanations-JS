/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
function twoOutOfThree(nums1, nums2, nums3) {
  const num1ToSeen = new Array(101);
  for (const num of nums1) num1ToSeen[num] = true;

  const num2ToSeen = new Array(101);
  for (const num of nums2) num2ToSeen[num] = true;

  const num3ToSeen = new Array(101);
  for (const num of nums3) num3ToSeen[num] = true;

  const commonNums = [];
  for (let num = 1; num < 101; num++)
  {
    let numFreq = 0;
    if (num1ToSeen[num]) numFreq++;
    if (num2ToSeen[num]) numFreq++;
    if (num3ToSeen[num]) numFreq++;

    if (numFreq >= 2) commonNums.push(num);
  }

  return commonNums;
}
