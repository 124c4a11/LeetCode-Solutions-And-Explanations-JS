/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function differenceOfSums(n, m) {
  let diff = 0;
  for (let num = 1; num <= n; num++)
  {
    if (num % m === 0) diff -= num;
    else diff += num;
  }

  return diff;
}
