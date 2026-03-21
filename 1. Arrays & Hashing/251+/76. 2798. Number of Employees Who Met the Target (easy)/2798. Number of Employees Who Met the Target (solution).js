/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
function numberOfEmployeesWhoMetTarget(hours, target) {
  let result = 0;
  for (const num of hours) {
    if (num >= target) result++;
  }

  return result;
}
