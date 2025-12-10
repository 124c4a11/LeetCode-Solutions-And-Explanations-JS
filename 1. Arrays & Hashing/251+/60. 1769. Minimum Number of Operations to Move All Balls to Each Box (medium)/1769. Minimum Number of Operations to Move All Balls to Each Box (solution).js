/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
  const n = boxes.length;

  const result = new Int32Array(n);
  let balls = 0;
  let moves = 0;
  for (let i = 0; i < n; i++) {
    result[i] = balls + moves;
    moves += balls;
    balls += Number(boxes[i]);
  }

  balls = moves = 0;
  for (let i = n - 1; i >= 0; i--) {
    result[i] += balls + moves;
    moves += balls;
    balls += Number(boxes[i]);
  }

  return result;
}
