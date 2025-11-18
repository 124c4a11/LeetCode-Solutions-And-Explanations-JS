/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const sourceSet = new Set();
  for (const path of paths) {
    sourceSet.add(path[0]);
  }

  for (const path of paths) {
    if (!sourceSet.has(path[1])) return path[1];
  }
};
