/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
function getOrder(tasks) {
  if (!tasks?.length) return [];

  const n = tasks.length;

  const sortedTasks = tasks
    .map((task, i) => ({
      startTime: task[0],
      duration: task[1],
      index: i
    }))
    .sort((a, b) => a.startTime - b.startTime);

  const minQueue = new PriorityQueue((a, b) => {
    if (a.duration === b.duration) {
      return a.index - b.index;
    } else {
      return a.duration - b.duration;
    }
  })

  const result = [];
  let cpuStartTime = 0;
  let i = 0;
  while (!minQueue.isEmpty() || i < n) {
    if (
      minQueue.isEmpty()
      && cpuStartTime < sortedTasks[i].startTime
    ) cpuStartTime = sortedTasks[i].startTime;

    while (
      i < n
      && cpuStartTime >= sortedTasks[i].startTime
    ) {
      minQueue.enqueue(sortedTasks[i]);
      i++;
    }

    const nextTask = minQueue.dequeue();

    cpuStartTime += nextTask.duration;
    result.push(nextTask.index);
  }

  return result;
}
