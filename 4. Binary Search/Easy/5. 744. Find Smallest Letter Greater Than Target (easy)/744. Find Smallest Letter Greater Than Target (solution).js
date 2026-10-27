/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters, target) {
  const n = letters.length;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const midd = Math.floor(l + (r - l) / 2);

    if (letters[midd] <= target) l = midd + 1;
    else r = midd - 1;
  }

  return letters[l % n];
}
