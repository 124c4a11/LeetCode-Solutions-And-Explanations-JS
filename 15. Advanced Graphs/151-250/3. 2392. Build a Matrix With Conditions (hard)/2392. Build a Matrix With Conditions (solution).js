/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
function buildMatrix(k, rowConditions, colConditions) {
  const rowOrder = topoSort(k, rowConditions);
  if (!rowOrder.length) return [];

  const colOrder = topoSort(k, colConditions);
  if (!colOrder.length) return [];

  const numToRow = new Map();
  rowOrder.forEach((num, i) => {
    numToRow.set(num, i);
  });

  const numToCol = new Map();
  colOrder.forEach((num, i) => {
    numToCol.set(num, i);
  });

  const result = Array.from(
    { length: k },
    () => Array(k).fill(0)
  );
  for (let num = 1; num <= k; num++) {
    const r = numToRow.get(num);
    const c = numToCol.get(num);

    result[r][c] = num;
  }

  return result;
}

/**
 * @param {number} k
 * @param {number[][]} edges
 * @return {number[]}
 */
function topoSort(k, edges) {
  const adj = Array.from(
    { length: k + 1 },
    () => []
  );
  edges.forEach(([src, dst]) => {
    adj[src].push(dst);
  });

  const order = [];
  const visitStatus = new Int32Array(k + 1);

  function dfs(src) {
    if (visitStatus[src] === 1) return false;
    if (visitStatus[src] === 2) return true;

    visitStatus[src] = 1;

    for (const nei of adj[src]) {
      if (!dfs(nei)) return false;
    }

    order.push(src);
    visitStatus[src] = 2;

    return true;
  };

  for (let src = 1; src <= k; src++) {
    if (visitStatus[src]) continue;
    if (!dfs(src)) return [];
  }

  return order.reverse();
}