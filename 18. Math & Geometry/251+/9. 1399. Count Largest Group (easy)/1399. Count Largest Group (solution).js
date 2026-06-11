/**
 * @param {number} n
 * @return {number}
 */
function countLargestGroup(n) {
  let largestGroupsCnt = 0;
  let maxGroupSize = 0;
  const digitSumToCnt = new Int32Array(40);
  for (let num = 1; num <= n; num++) {
    let digitSum = 0;
    let tmpNum = num;
    while (tmpNum > 0) {
      digitSum += tmpNum % 10;
      tmpNum = Math.floor(tmpNum / 10);
    }

    digitSumToCnt[digitSum]++;

    if (digitSumToCnt[digitSum] > maxGroupSize) {
      maxGroupSize = digitSumToCnt[digitSum];
      largestGroupsCnt = 1;
    } else if (digitSumToCnt[digitSum] === maxGroupSize) {
      largestGroupsCnt++;
    }
  }

  return largestGroupsCnt;
}
