/**
 * @param {string} s
 * @return {number}
 */
function countKeyChanges(s) {
  const normalizedStr = s.toLowerCase();

  let result = 0;   
  for (let i = 1; i < normalizedStr.length; i++) {
    if (normalizedStr[i - 1] !== normalizedStr[i]) result++;
  }

  return result;
}
