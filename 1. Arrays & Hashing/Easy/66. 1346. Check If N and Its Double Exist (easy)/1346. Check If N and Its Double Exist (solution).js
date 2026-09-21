/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
  const set = new Set();
  for (const num of arr) {
    if (set.has(num * 2)) return true;
    if  (
      (num & 1) === 0
      && set.has(num / 2)
    ) return true;

    set.add(num);
  }

  return false;
}
