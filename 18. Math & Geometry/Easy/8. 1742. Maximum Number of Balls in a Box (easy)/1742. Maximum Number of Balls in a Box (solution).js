/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(lowLimit, highLimit) {
  const boxToBallsCnt = new Int32Array(50);
  for (let ballNum = lowLimit; ballNum <= highLimit; ballNum++) {
    let digitSum = 0;
    let currNum = ballNum;
    while (currNum) {
      digitSum += currNum % 10;
      currNum = Math.floor(currNum / 10);
    }

    boxToBallsCnt[digitSum]++;
  }

  return Math.max(...boxToBallsCnt);
}
