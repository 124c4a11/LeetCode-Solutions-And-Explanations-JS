/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      const midd = Math.floor(l + (r - l) / 2);

      if (isBadVersion(midd)) r = midd;
      else l = midd + 1;
    }

    return l;
  };
}
