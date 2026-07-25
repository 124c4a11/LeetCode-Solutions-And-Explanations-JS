/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function divideString(s, k, fill) {
  const groups = [];
  for (let i = 0; i < s.length; i += k) {
    const group = s.slice(i, i + k).padEnd(k, fill);

    groups.push(group);
  }

  return groups;
}
