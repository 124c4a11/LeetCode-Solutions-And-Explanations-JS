/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
function mostBooked(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  const available = new PriorityQueue((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0],
  );
  for (let i = 0; i < n; i++) {
    available.enqueue([0, i]);
  }

  const meetingsPerRoom = new Int32Array(n);
  for (const [start, end] of meetings) {
    while (
      !available.isEmpty()
      && available.front()[0] < start
    ) {
      const [_, room] = available.dequeue();
      available.enqueue([start, room]);
    }

    const [endTime, room] = available.dequeue();

    available.enqueue([endTime + (end - start), room]);
    meetingsPerRoom[room]++;
  }

  return meetingsPerRoom.indexOf(Math.max(...meetingsPerRoom));
}
