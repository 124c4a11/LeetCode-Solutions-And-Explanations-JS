/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const set = new Set();
  for (const email of emails) {
    let local = '';
    let i = 0;
    while (
      i < email.length
      && email[i] !== '@'
      && email[i] !== '+'
    ) {
      if (email[i] !== '.') {
        local += email[i];
      }

      i++;
    }

    while (
      i < email.length
      && email[i] !== '@'
    ) i++;

    const domain = email.slice(i + 1);

    set.add(`${local}@${domain}`);
  }

  return set.size;
};