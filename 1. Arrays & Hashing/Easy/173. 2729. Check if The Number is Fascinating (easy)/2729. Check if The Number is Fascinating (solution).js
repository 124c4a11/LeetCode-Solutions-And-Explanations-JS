/**
 * @param {number} n
 * @return {boolean}
 */
function isFascinating(n) {
  const str = `${n}${n * 2}${n * 3}`;

  if (str.length !== 9) return false;

  const set = new Set(str);

  if (set.has('0')) return false;

  return set.size === 9;
}
