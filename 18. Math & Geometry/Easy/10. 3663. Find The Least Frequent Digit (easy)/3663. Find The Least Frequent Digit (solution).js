/**
 * @param {number} n
 * @return {number}
 */
function getLeastFrequentDigit(n) {
  const digitToFreq = new Int32Array(10);
  while (n > 0) {
    digitToFreq[n % 10]++;
    n = Math.floor(n / 10);
  }

  let digitWithMinFreq = 0;
  let minFreq = Infinity;
  for (let digit = 0; digit < 10; digit++) {
    const digitFreq = digitToFreq[digit];

    if (
      digitFreq === 0
      || digitFreq >= minFreq
    ) continue;

    digitWithMinFreq = digit;
    minFreq = digitFreq;
  }

  return digitWithMinFreq;
}
