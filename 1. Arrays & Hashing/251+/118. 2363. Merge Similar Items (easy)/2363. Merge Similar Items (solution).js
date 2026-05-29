/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
function mergeSimilarItems(items1, items2) {
  const valueToWeight = new Int32Array(1001);
  for (const pair of items1) valueToWeight[pair[0]] = pair[1];
  for (const pair of items2) valueToWeight[pair[0]] += pair[1];

  const mergedSimilarItems = [];
  for (let value = 1; value < 1001; value++) {
    const weight = valueToWeight[value];

    if (weight === 0) continue;

    mergedSimilarItems.push([value, weight]);
  }

  return mergedSimilarItems;
}
