/**
 * @param {string} num
 * @return {string}
 */
function largestGoodInteger(num) {
  if (num.length < 3) return '';
  
  let result = -1;
  for (let i = 0; i < num.length - 2; i++) {
    if (
      num[i] === num[i + 1]
      && num[i] === num[i + 2]
    ) {
      result = Math.max(result, Number(num[i]));
      i += 2;
    }
  }

  return result === -1 ? '' : `${result}`.repeat(3);
}
