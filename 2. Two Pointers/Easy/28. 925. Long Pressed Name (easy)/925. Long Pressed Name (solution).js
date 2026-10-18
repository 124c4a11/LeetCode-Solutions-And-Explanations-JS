/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
function isLongPressedName(name, typed) {
  let i = 0;
  for (let j = 0; j < typed.length; j++) {
    if (name[i] === typed[j]) i++;
    else if (typed[j - 1] !== typed[j]) return false;
  }

  return i === name.length;
}
