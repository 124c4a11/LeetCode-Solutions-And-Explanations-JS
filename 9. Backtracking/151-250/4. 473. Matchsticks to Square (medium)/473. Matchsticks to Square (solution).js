/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
function makesquare(matchsticks) {
  const totalLength =
    matchsticks.reduce((a, b) => a + b, 0);

  if (totalLength % 4) return false;

  matchsticks.sort((a, b) => b - a);

  const length = totalLength / 4;
  const sides = new Int32Array(4);

  function dfs(i = 0) {
    if (i === matchsticks.length) return true;

    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] > length) continue

      sides[j] += matchsticks[i];

      if (dfs(i + 1)) return true;

      sides[j] -= matchsticks[i];


      if (sides[j] === 0) break;
    }

    return false;
  };

  return dfs();
}
