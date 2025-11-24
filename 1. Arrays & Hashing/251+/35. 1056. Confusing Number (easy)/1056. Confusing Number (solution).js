/**
 * @param {number} n
 * @return {boolean}
 */
function confusingNumber(n) {
  const invertMap = new Map([
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6'],
  ]);

  let rotatedNumber = '';
  for (const char of String(n)) {
    if (!invertMap.has(char)) {
      return false;
    }

    rotatedNumber += invertMap.get(char);
  }

  rotatedNumber = rotatedNumber
    .split('')
    .reverse()
    .join('');

  return Number(rotatedNumber) !== n;
}
