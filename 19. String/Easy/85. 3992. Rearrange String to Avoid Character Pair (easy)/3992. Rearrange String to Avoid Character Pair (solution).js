/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
function rearrangeString(s, x, y) {
  const t = s.split('');
  let i = 0;
  for (let j = 0; j < s.length; j++)
  {
    if (t[j] !== y) continue;

    const tmp = t[i];

    t[i] = t[j];
    t[j] = tmp;

    i++;
  }

  return t.join('');
}
