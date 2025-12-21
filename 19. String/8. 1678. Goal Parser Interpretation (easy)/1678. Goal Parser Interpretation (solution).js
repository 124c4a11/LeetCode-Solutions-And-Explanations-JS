/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  const result = [];
  let i = 0;
  while (i < command.length) {
    const currChar = command[i];
    const nextChar = command[i + 1];

    if (currChar === 'G') {
      result.push('G');
      i++;
    } else if (
      currChar === '('
      && nextChar === ')'
    ) {
      result.push('o');
      i += 2;
    } else {
      result.push('al');
      i += 4;
    }
  }

  return result.join('');
}
