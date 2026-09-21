/**
 * @param {number[]} digits
 * @return {number}
 */
function totalNumbers(digits) {
  const n = digits.length;

  const uniqueNums = new Set();
  for (let onesNdx = 0; onesNdx < n; onesNdx++) {
    if ((digits[onesNdx] & 1) === 1) continue;

    for (let tensNdx = 0; tensNdx < n; tensNdx++) {
      if (tensNdx === onesNdx) continue;

      for (let hundredsNdx = 0; hundredsNdx < n; hundredsNdx++) {
        if (
          digits[hundredsNdx] === 0
          || hundredsNdx === onesNdx
          || hundredsNdx === tensNdx
        ) continue;

        uniqueNums.add(digits[hundredsNdx] * 100 + digits[tensNdx] * 10 + digits[onesNdx]);
      }
    }
  }

  return uniqueNums.size;
}
