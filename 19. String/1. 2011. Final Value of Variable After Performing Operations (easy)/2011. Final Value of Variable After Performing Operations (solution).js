/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  let X = 0;
  for (const operation of operations) {
    X += operation[1] === '+' ? 1 : -1;
  }

  return X;
}
