/**
 * @param {number[]} hours
 * @return {number}
 */
function countCompleteDayPairs(hours) {
  let pairsCnt = 0;
  const remainderToCnt = new Int32Array(24);
  for (const hour of hours) {
    const neededRemainder = (24 - (hour % 24)) % 24;

    pairsCnt += remainderToCnt[neededRemainder];

    remainderToCnt[hour % 24]++;
  }

  return pairsCnt;
}
