/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
function earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration) {
  const landFirstFinishTime = calc(landStartTime, landDuration, waterStartTime, waterDuration);
  const waterFirstFinishTime = calc(waterStartTime, waterDuration, landStartTime, landDuration);

  return Math.min(landFirstFinishTime, waterFirstFinishTime);
}

/**
 * @param firstStartTimes - Массив возможных времен начала для первого действия
 * @param firstDurations - Массив длительностей для первого действия
 * @param secondStartTimes - Массив возможных времен начала для второго действия
 * @param secondDurations - Массив длительностей для второго действия
 * @returns Минимальное общее время завершения для этой последовательности
 *
 * Функция вычисляет минимальное время завершения при выполнении сначала
 * первого действия, затем второго действия.
 */
function calc(firstStartTimes, firstDurations, secondStartTimes, secondDurations) {
  let earliestFirstActivityEnd = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < firstStartTimes.length; i++) {
    earliestFirstActivityEnd = Math.min(
      earliestFirstActivityEnd,
      firstStartTimes[i] + firstDurations[i]
    );
  }

  let minTotalFinishTime = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < secondStartTimes.length; i++) {
    const actualSecondStartTime = Math.max(earliestFirstActivityEnd, secondStartTimes[i]);
    const totalFinishTime = actualSecondStartTime + secondDurations[i];

    minTotalFinishTime = Math.min(minTotalFinishTime, totalFinishTime);
  }

  return minTotalFinishTime;
}
