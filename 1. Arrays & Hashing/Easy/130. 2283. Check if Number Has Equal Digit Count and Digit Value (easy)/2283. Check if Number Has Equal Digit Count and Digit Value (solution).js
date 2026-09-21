/**
 * @param {string} num
 * @return {boolean}
 */
function digitCount(num) {
  const digitToFreq = new Int32Array(10);
  for (const digit of num) digitToFreq[digit]++;

  for (let digit = 0; digit < num.length; digit++) {
    const digitFreq = digitToFreq[digit];
    const targetFreq = Number(num[digit]);

    if (digitFreq !== targetFreq) return false;
  }

  return true;
}
