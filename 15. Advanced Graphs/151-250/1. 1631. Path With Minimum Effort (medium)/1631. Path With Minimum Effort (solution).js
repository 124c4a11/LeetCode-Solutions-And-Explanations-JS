/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  const directions = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0]
  ];

  const ROWS = heights.length;
  const COLS = heights[0].length;

  const dist = Array.from(
    { length: ROWS },
    () => new Array(COLS).fill(Infinity)
  );
  dist[0][0] = 0;

  const minHeap = new MinPriorityQueue((a) => a.diff);
  minHeap.enqueue({ diff: 0, r: 0, c: 0 });

  while (!minHeap.isEmpty()) {
    const { diff, r, c } = minHeap.dequeue();

    if (
      r === ROWS - 1
      && c === COLS - 1
    ) return diff;
    if (dist[r][c] < diff) continue;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        Math.min(nr, nc) < 0
        || nr === ROWS
        || nc === COLS
      ) continue;

      const newDiff = Math.max(
        diff,
        Math.abs(heights[r][c] - heights[nr][nc]),
      );

      if (newDiff < dist[nr][nc]) {
        dist[nr][nc] = newDiff;
        minHeap.enqueue({
          diff: newDiff,
          r: nr,
          c: nc
        });
      }
    }
  }

  return 0;
}
