/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdLength = gcd(str1.length, str2.length);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str1[i % gcdLength]) return '';
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== str1[i % gcdLength]) return '';
  }

  return str1.slice(0, gcdLength);
}
