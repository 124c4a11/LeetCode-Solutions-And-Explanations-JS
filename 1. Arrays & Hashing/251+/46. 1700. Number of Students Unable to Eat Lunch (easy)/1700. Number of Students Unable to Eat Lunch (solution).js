/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  const preferenceCnt = new Int32Array(2);
  for (const s of students) preferenceCnt[s]++;

  let result = students.length;
  for (const s of sandwiches) {
    if (!preferenceCnt[s]) break;

    preferenceCnt[s]--;
    result--;
  }

  return result;
}
