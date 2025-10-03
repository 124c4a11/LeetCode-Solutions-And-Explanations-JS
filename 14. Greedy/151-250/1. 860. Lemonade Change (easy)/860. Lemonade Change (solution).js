/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
  let five = 0;
  let ten = 0;
  for (let b of bills) {
    if (b === 5) {
      five++;
    } else if (b === 10) {
      five--;
      ten++;
    } else if (ten > 0) {
      five--;
      ten--;
    } else {
      five -= 3;
    }

    if (five < 0) return false;
  }

  return true;
}
