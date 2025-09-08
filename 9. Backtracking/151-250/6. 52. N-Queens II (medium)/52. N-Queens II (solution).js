/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  const cols = new Array(n);
  const posDiag = new Array(n * 2);
  const negDiag = new Array(n * 2);

  let result = 0;

  !function dfs(r = 0) {
    if (r === n) {
      result++;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (
        cols[c]
        || posDiag[r + c]
        || negDiag[r - c + n]
      ) continue;

      cols[c] = true;
      posDiag[r + c] = true;
      negDiag[r - c + n] = true;

      dfs(r + 1);

      cols[c] = false;
      posDiag[r + c] = false;
      negDiag[r - c + n] = false;
    }
  }();

  return result;
}
