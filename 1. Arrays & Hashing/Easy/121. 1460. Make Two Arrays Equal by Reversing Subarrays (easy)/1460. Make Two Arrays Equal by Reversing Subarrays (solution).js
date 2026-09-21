/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
function canBeEqual(target, arr) {
  const targetNumToFreq = new Int32Array(1001);
  for (const num of target) targetNumToFreq[num]++;

  for (const num of arr) {
    if (targetNumToFreq[num] === 0) return false;

    targetNumToFreq[num]--;
  }

  return true;
}
