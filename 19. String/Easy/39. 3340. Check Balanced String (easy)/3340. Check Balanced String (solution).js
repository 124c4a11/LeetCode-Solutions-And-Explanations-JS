/**
 * @param {string} num
 * @return {boolean}
 */
function isBalanced(num) {
  let delta = 0;
  for (let i = 0; i < num.length; i++) {
    delta += i % 2 ? Number(num[i]) : -num[i];
  }

  return delta === 0;
}
