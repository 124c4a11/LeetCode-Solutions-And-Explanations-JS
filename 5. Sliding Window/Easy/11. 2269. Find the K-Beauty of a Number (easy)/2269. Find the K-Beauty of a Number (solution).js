/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
function divisorSubstrings(num, k) {
  const numStr = num.toString();

  let kBeauty = 0;
  for (let i = 0; i <= numStr.length - k; i++) {
    const currNum = Number(numStr.slice(i, i + k));

    if (
      currNum !== 0
      && num % currNum === 0
    ) kBeauty++;
  }

  return kBeauty;
}
