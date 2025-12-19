/**
 * @param {string} date
 * @return {string}
 */
function convertDateToBinary(date) {
  const dateArr = date.split('-');
  for (let i = 0; i < dateArr.length; i++) {
    dateArr[i] = Number(dateArr[i]).toString(2);
  }

  return dateArr.join('-');
}
