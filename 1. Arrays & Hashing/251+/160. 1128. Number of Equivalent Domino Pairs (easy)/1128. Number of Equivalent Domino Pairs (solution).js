/**
 * @param {number[][]} dominoes
 * @return {number}
 */
function numEquivDominoPairs(dominoes) {
  let pairsCnt = 0;
  const dominoKeyToCnt = new Int32Array(100);
  for (const domino of dominoes) {
    const num1 = domino[0];
    const num2 = domino[1];

    const dominoKey = num1 < num2
      ? num1 * 10 + num2
      : num2 * 10 + num1;

    pairsCnt += dominoKeyToCnt[dominoKey];

    dominoKeyToCnt[dominoKey]++;
  }

  return pairsCnt;
}
