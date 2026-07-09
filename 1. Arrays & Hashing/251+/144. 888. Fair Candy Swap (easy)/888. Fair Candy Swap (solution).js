/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
function fairCandySwap(aliceSizes, bobSizes) {
  let aliceTotal = 0;
  for (const size of aliceSizes) aliceTotal += size;

  let bobTotal = 0;
  const bobSizesSet = new Set();
  for (const size of bobSizes) {
    bobTotal += size;
    bobSizesSet.add(size);
  }

  const halfDiff = (aliceTotal - bobTotal) >> 1;

  for (const aliceSize of aliceSizes) {
    const targetSize = aliceSize - halfDiff;

    if (!bobSizesSet.has(targetSize)) continue;

    return [aliceSize, targetSize];
  }

  return [];
}
