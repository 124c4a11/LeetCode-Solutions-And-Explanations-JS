/**
 * @param {character[][]} board
 * @return {number}
 */
function numRookCaptures(board) {
  const n = board.length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== 'R') continue;

      let captureCnt = 0;
      for (const dir of directions) {
        const dr = dir[0];
        const dc = dir[1];

        let nr = r + dr;
        let nc = c + dc;
        while (
          nr >= 0
          && nr < n
          && nc >= 0
          && nc < n
          && board[nr][nc] !== 'B'
        ) {
          if (board[nr][nc] === 'p') {
            captureCnt++;
            break;
          }

          nr += dr;
          nc += dc;
        }
      }

      return captureCnt;
    }
  }

  return 0;
}
