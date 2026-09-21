/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
function finalPositionOfSnake(n, commands) {
  let row = 0;
  let col = 0;
  for (const command of commands) {
    if (command === 'DOWN') row++;
    else if (command === 'UP') row--; 
    else if (command === 'RIGHT') col++;
    else if (command === 'LEFT') col--;
  }

  return row * n + col;
}
