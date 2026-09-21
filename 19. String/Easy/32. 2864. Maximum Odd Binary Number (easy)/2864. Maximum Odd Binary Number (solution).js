/**
 * @param {string} s
 * @return {string}
 */
function maximumOddBinaryNumber(s) {
  const onesCnt = s.replace(/0/g, '').length;
  const zerosCnt = s.length - onesCnt;

  return '1'.repeat(onesCnt - 1) + '0'.repeat(zerosCnt) + '1';
}
