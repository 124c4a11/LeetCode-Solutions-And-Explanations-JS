/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const row = [1];
  for (let i = 1; i <= rowIndex; i++) {
    row.push(
      Math.floor(
        row.at(-1) * (rowIndex - i + 1) / i
      ),
    );
  }

  return row;
};
