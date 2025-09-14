/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
function findMaximizedCapital(k, w, profits, capital) {
  const n = profits.length;

  const indices = Array.from({ length: n }, (_, i) => i);
  indices.sort((a, b) => capital[a] - capital[b]);

  const maxProfit = new MaxPriorityQueue();
  let i = 0;
  for (let j = 0; j < k; j++) {
    while (
      i < n
      && capital[indices[i]] <= w
    ) {
      maxProfit.enqueue(profits[indices[i]]);
      i++;
    }

    if (maxProfit.isEmpty()) break;

    w += maxProfit.dequeue();
  }

  return w;
}
