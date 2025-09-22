/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];

  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const edgeCnt = new Int32Array(n);
  const leaves = new Queue();
  for (let i = 0; i < n; i++) {
    edgeCnt[i] = adj[i].length;

    if (adj[i].length === 1) {
      leaves.push(i);
    }
  }

  while (!leaves.isEmpty()) {
    if (n <= 2) return leaves.toArray();

    const size = leaves.size();
    for (let i = 0; i < size; i++) {
      const node = leaves.pop();

      n--;

      for (const nei of adj[node]) {
        edgeCnt[nei]--;

        if (edgeCnt[nei] === 1) {
          leaves.push(nei);
        }
      }
    }
  }

  return [];
}
