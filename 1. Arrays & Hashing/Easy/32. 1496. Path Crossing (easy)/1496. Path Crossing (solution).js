/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  const visited = new Set();
  let x = 0;
  let y = 0;
  visited.add(`${x},${y}`);

  for (const char of path) {
    if (char === 'N') y++;
    else if (char === 'S') y--;
    else if (char === 'E') x++;
    else if (char === 'W') x--;

    const pos = `${x},${y}`;

    if (visited.has(pos)) return true;
    visited.add(pos);
  }

  return false;
}
