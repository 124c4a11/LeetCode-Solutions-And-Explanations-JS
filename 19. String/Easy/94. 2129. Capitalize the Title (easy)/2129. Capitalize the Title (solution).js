/**
 * @param {string} title
 * @return {string}
 */
function capitalizeTitle(title) {
  const chars = title.split('');
  const n = chars.length;

  let l = 0;
  while (l < n) {
    let r = l;
    while (
      r < n
      && chars[r] !== ' '
    ) {
      chars[r] = chars[r].toLowerCase();
      r++;
    }

    if (r - l > 2) chars[l] = chars[l].toUpperCase();

    l = r + 1;
  }

  return chars.join('');
}
