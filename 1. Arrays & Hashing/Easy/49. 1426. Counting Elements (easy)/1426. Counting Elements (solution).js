/**
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  const set = new Set(arr);

  let result = 0;
  for (const num of arr) {
    if (set.has(num + 1)) result++;
  }

  return result;
}
