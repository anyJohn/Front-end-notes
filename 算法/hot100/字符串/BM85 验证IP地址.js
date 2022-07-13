/**
 * 验证IP地址
 * @param IP string字符串 一个IP地址字符串
 * @return string字符串
 */
function solve(IP) {
  // write code here
  if (!IP) return 'Neither';
  let arr = IP.split('.');
  if (arr[0].length === 3 && arr.length === 4) {
    return isIpv4(arr);
  } else {
    arr = arr.join('').split(':');
    if ((arr[0].length <= 4 || arr[0] === '0') && arr.length === 8) {
      return isIpv6(arr);
    }
    return 'Neither';
  }
}
function isIpv4(arr) {
  for (const item of arr) {
    if (!(item <= '255' && item >= '0' && item[0] !== '0')) {
      return 'Neither';
    }
  }
  return 'IPv4';
}
function isIpv6(arr) {
  for (const item of arr) {
    if (item === '') {
      return 'Neither';
    }
    for (const char of item) {
      let num = parseInt(char, 16);
      if (isNaN(num)) {
        return 'Neither';
      }
    }
  }
  return 'IPv6';
}
module.exports = {
  solve: solve,
};
