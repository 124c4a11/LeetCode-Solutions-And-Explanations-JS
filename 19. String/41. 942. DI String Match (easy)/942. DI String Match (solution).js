/**
 * @param {string} s
 * @return {number[]}
 */
function diStringMatch(s) {
  const result = [];
  let lowest = 0;
  let highest = s.length;
  for (const char of s) {
    if (char === 'I') {
      result.push(lowest);
      lowest++;
    } else {
      result.push(highest);
      highest--;
    }
  }

  result.push(lowest);

  return result;
}
