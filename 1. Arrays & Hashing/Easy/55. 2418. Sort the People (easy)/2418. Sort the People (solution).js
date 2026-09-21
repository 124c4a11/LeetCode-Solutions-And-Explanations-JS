/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
function sortPeople(names, heights) {
  const indices = names.map((_, i) => i);
  indices.sort((a, b) => heights[b] - heights[a]);

  return indices.map((i) => names[i]);
}
