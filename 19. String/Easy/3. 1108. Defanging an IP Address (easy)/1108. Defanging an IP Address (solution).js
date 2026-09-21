/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
  return address.replace(/\./g, '[.]');
}
