/**
 * @param {string} date
 * @return {string}
 */
function reformatDate(date) {
  const monthToNumber = new Map([
    ['Jan', '01'], ['Feb', '02'], ['Mar', '03'], ['Apr', '04'],
    ['May', '05'], ['Jun', '06'], ['Jul', '07'], ['Aug', '08'],
    ['Sep', '09'], ['Oct', '10'], ['Nov', '11'], ['Dec', '12']
  ]);

  const dateComponents = date.split(' ');

  const dayOfMonth = parseInt(dateComponents[0]).toString().padStart(2, '0');
  const monthNumber = monthToNumber.get(dateComponents[1]);
  const year = dateComponents[2];

  return `${year}-${monthNumber}-${dayOfMonth}`;
}
