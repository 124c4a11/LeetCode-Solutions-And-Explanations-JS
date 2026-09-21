/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  const list1StrToNdx = new Map();
  for (let i = 0; i < list1.length; i++) {
    list1StrToNdx.set(list1[i], i);
  }

  const commonStrings = [];
  let minNdxSum = Infinity;
  for (let i = 0; i < list2.length; i++) {
    if (i > minNdxSum) break;

    const str = list2[i];
    const j = list1StrToNdx.get(str);

    if (j === undefined) continue;

    const currNdxSum = i + j;

    if (currNdxSum > minNdxSum) continue;

    if (currNdxSum < minNdxSum) {
      commonStrings.length = 0;
      minNdxSum = currNdxSum;
    }

    commonStrings.push(str);
  }

  return commonStrings;
}
