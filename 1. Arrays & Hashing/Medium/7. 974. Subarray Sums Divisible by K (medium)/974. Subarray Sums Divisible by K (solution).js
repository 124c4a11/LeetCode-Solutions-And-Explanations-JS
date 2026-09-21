/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
  const remainderCount = new Int32Array(k);
  remainderCount[0] = 1;

  let prefixRemainder = 0;
  let result = 0;
  for (const num of nums) {
    prefixRemainder = ((prefixRemainder + num) % k + k) % k;

    result += remainderCount[prefixRemainder];

    remainderCount[prefixRemainder]++;
  }

  return result;
}
