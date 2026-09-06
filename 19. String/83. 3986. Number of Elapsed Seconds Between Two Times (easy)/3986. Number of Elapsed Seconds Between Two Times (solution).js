/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
function secondsBetweenTimes(startTime, endTime) {
  return timeStringToSeconds(endTime) - timeStringToSeconds(startTime);
}

function timeStringToSeconds(s) {
  return Number(s.slice(0, 2)) * 3600
         + Number(s.slice(3, 5)) * 60
         + Number(s.slice(6, 8));
}
