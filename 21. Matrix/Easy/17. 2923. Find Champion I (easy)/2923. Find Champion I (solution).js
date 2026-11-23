/**
 * @param {number[][]} grid
 * @return {number}
 */
function findChampion(grid) {
  const n = grid.length;

  let winner = 0;
  for (let opponent = 0; opponent < n; opponent++) {
    if (opponent === winner) continue;
    if (grid[winner][opponent] === 0) {
      winner = opponent;
    }
  }

  return winner;
}
