/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
function winningPlayerCount(n, pick) {
  const playerToBallColorToCnt = Array.from(
    { length: n },
    () => new Int32Array(11)
  );
  const winningPlayers = new Set();
  for (const pair of pick) {
    const player = pair[0];
    const ballColor = pair[1];

    const ballColorCnt = ++playerToBallColorToCnt[player][ballColor];

    if (ballColorCnt > player) winningPlayers.add(player);
  }

  return winningPlayers.size;
}
