/**
 * @param {string} coordinates
 * @return {boolean}
 */
function squareIsWhite(coordinates) {
  const row = Number(coordinates[1]);
  const col = coordinates.codePointAt(0) - 96;

  return Boolean((row + col) % 2);
}
