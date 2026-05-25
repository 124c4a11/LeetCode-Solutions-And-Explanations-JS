/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
function minimumBoxes(apple, capacity) {
  const capacityToFreq = new Int32Array(51);
  for (const num of capacity) capacityToFreq[num]++;

  let boxesCnt = 0;
  let totalApples = apple.reduce((a, b) => a + b, 0);
  for (let currCapacity = 50; currCapacity >= 0; currCapacity--) {
    let freq = capacityToFreq[currCapacity];

    if (freq === 0) continue;

    while (freq-- > 0)
    {
      totalApples -= currCapacity;
      boxesCnt++;

      if (totalApples <= 0) return boxesCnt;
    }
  }
}
