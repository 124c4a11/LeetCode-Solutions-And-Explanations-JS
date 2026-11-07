/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function checkIfPrerequisite(numCourses, prerequisites, queries) {
  const adj = Array.from({ length: numCourses }, () => []);
  const inDegree = new Int32Array(numCourses);
  const isPrereq = Array.from(
    { length: numCourses },
    () => new Array(numCourses).fill(false)
  );
  for (const [u, v] of prerequisites) {
    adj[u].push(v);
    inDegree[v]++;
    isPrereq[v][u] = true;
  }

  const q = new Queue();
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) q.enqueue(i);
  }

  while (!q.isEmpty()) {
    const crs = q.dequeue();

    for (const next of adj[crs]) {
      for (let i = 0; i < numCourses; i++) {
        if (isPrereq[crs][i]) {
          isPrereq[next][i] = true;
        }
      }

      isPrereq[next][crs] = true;

      inDegree[next]--;
      if (inDegree[next] === 0) q.enqueue(next);
    }
  }

  return queries.map(([u, v]) => isPrereq[v][u]);
}
