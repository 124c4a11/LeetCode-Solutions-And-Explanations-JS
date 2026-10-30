/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  if (num < 1) return false;

  let l = 1;
  let r = num;
  while (l <= r) {
    const midd = Math.floor(l + (r - l) / 2);
    const square = midd * midd;

    if (square === num) return true;

    if (square < num) l = midd + 1;
    else r = midd - 1;
  }

  return false;
}
