/**
 * @param {number[][]} image
 * @return {number[][]}
 */
function flipAndInvertImage(image) {
  for (const row of image) {
    let l = 0;
    let r = row.length - 1;
    for (; l < r; l++, r--) {
      if (row[l] === row[r]) {
        row[l] ^= 1;
        row[r] ^= 1;
      }
    }

    if (l === r) row[l] ^= 1;
  }

  return image;
}
