/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
function canFormArray(arr, pieces) {
  const firstPieceNumToPiece = new Array(101);
  for (const piece of pieces) {
    firstPieceNumToPiece[piece[0]] = piece;
  }

  let i = 0;
  while (i < arr.length) {
    const matchingPiece = firstPieceNumToPiece[arr[i]];

    if (!matchingPiece) return false;

    for (const pieceNum of matchingPiece) {
      if (arr[i] !== pieceNum) return false;

      i++;
    }
  }

  return true;
}
