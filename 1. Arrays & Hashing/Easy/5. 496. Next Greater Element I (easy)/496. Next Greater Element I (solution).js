/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const nums1ToNdx = new Map();
  for (let i = 0; i < nums1.length; i++) {
    nums1ToNdx.set(nums1[i], i)
  }

  const result = new Array(nums1.length).fill(-1);
  const stack = [];
  for (const num of nums2) {
    while (
      stack.length
      && num > stack.at(-1)
    ) {
      const stackNum = stack.pop();
      const i = nums1ToNdx.get(stackNum);

      result[i] = num;
    }

    if (nums1ToNdx.has(num)) {
      stack.push(num);
    }
  }

  return result;
}
