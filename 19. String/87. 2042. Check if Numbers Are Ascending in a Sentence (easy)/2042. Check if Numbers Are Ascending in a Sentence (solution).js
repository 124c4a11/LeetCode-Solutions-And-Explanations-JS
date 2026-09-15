/**
 * @param {string} s
 * @return {boolean}
 */
function areNumbersAscending(s) {
  const tokens = s.split(' ');

  let prevNum = -1;
  for (const token of tokens) {
    const num = Number(token);

    if (Number.isNaN(num)) continue;

    if (prevNum >= num) return false;

    prevNum = num;
  }

  return true;
}
