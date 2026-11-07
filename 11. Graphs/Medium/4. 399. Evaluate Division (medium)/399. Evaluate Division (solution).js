/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
  const adj = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];

    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);

    adj.get(a).push([b, values[i]]);
    adj.get(b).push([a, 1 / values[i]]);
  }

  function dfs(src, dst, visited) {
    if (
      !adj.has(src)
      || !adj.has(dst)
    ) return -1;
    if (src === dst) return 1;

    visited.add(src);

    for (const [nei, weight] of adj.get(src)) {
      if (visited.has(nei)) continue;

      const result = dfs(nei, dst, visited);

      if (result !== -1) {
        return weight * result;
      }
    }

    return -1;
  };

  return queries.map(
    ([src, dst]) => dfs(src, dst, new Set())
  );
}
