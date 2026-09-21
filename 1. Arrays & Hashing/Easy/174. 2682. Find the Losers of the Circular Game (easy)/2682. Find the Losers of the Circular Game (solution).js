/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function circularGameLosers(n, k) {
  const playerToSeen = new Array(n);
  let player = 0;
  for (let turn = 1; !playerToSeen[player]; turn++) {
    playerToSeen[player] = true;
    player = (player + turn * k) % n;
  }

  const losers = [];
  for (let player = 1; player < playerToSeen.length; player++) {
    if (!playerToSeen[player]) losers.push(player + 1);
  }

  return losers;
}
