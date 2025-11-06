/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  const heightFreq = new Int32Array(101);
  for (let h of heights) heightFreq[h]++;

  const expected = [];
  for (let h = 1; h <= 100; h++) {
    for (let i = 0; i < heightFreq[h]; i++) {
      expected.push(h);
    }
  }

  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) result++;
  }

  return result;
};