/**
 * @param {number[]} deck
 * @return {boolean}
 */
function hasGroupsSizeX(deck) {
  const numToFreq = new Map();
  for (const num of deck) {
    numToFreq.set(num, (numToFreq.get(num) ?? 0) + 1);
  }

  let commonGroupSize = numToFreq.get(deck[0]);
  for (const pair of numToFreq) {
    commonGroupSize = calculateGCD(commonGroupSize, pair[1]);
  }

  return commonGroupSize >= 2;
}

function calculateGCD(a, b) {
  return b === 0 ? a : calculateGCD(b, a % b);
}
