/**
 * 暴力解
 * @param s string字符串
 * @return string字符串一维数组
 */
function restoreIpAddresses(s) {
  // write code here
  const result = [];
  for (let i = 1; i < 4; i++) {
    for (let j = i + 1; j < i + 4 && j < s.length - 1; j++) {
      for (let k = j + 1; k < j + 4 && k < s.length; k++) {
        if (s.length - k >= 4) continue;
        let str1 = s.slice(0, i);
        let str2 = s.slice(i, j);
        let str3 = s.slice(j, k);
        let str4 = s.slice(k);
        if (
          parseInt(str1) > 255 ||
          parseInt(str2) > 255 ||
          parseInt(str3) > 255 ||
          parseInt(str4) > 255
        ) {
          continue;
        }
        if (
          (str1.length > 1 && str1[0] === '0') ||
          (str2.length > 1 && str2[0] === '0') ||
          (str3.length > 1 && str3[0] === '0') ||
          (str4.length > 1 && str4[0] === '0')
        ) {
          continue;
        }
        result.push(`${str1}.${str2}.${str3}.${s.slice(k, s.length)}`);
      }
    }
  }
  return result;
}
module.exports = {
  restoreIpAddresses: restoreIpAddresses,
};
