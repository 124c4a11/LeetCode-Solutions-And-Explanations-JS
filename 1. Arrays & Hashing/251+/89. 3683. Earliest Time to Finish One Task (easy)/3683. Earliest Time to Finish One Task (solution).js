/**
 * @param {number[][]} tasks
 * @return {number}
 */
function earliestTime(tasks) {
  let earliestTimeToFinish = Infinity;
  for (const task of tasks) {
    earliestTimeToFinish = Math.min(
      earliestTimeToFinish,
      task[0] + task[1]
    );
  }

  return earliestTimeToFinish;
}
