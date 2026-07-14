/**
 * @param {number} n
 * @return {string}
 */
function generateTheString(n) {
  const chars = Array(n).fill('a');

  if ((n & 1) === 0) chars[0] = 'b';

  return chars.join('');
}
