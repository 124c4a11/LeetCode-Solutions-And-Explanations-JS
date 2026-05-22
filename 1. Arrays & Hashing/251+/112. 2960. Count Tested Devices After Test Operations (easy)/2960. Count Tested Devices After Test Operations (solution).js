/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
function countTestedDevices(batteryPercentages) {
  let testedCnt = 0;
  for (const percentage of batteryPercentages) {
    if (percentage > testedCnt) testedCnt++;
  }

  return testedCnt;
}
