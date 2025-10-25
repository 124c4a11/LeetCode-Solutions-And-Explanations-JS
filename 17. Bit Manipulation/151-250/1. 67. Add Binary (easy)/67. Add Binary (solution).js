/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const bigIntA = BigInt(`0b${a}`);
  const bigIntB = BigInt(`0b${b}`);

  const sum = bigIntA + bigIntB;

  return sum.toString(2);
}
