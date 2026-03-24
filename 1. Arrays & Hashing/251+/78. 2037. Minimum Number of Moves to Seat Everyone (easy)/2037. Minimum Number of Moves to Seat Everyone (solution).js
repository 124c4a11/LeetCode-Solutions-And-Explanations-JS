/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
  const n = seats.length;

  const posToSeatsCnt = new Int32Array(101);
  const posToStudentsCnt = new Int32Array(101);
  for (let i = 0; i < n; i++) {
    posToSeatsCnt[seats[i]]++;
    posToStudentsCnt[students[i]]++;
  }

  let result = 0;
  let i = 0;
  let j = 0;
  let remainder = n; 
  while (remainder > 0) {
    if (posToSeatsCnt[i] === 0) {
      i++;
      continue;
    }

    if (posToStudentsCnt[j] === 0) {
      j++;
      continue;
    }

    result += Math.abs(i - j);
    posToSeatsCnt[i]--;
    posToStudentsCnt[j]--;
    remainder--;
  }

  return result;
}
