/**
 * 双指针解法，优化方向，不用数组，直接遍历中跳过标识符
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  // write code here
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (parseInt(arr1[i]) > parseInt(arr2[j])) {
      return 1;
    } else if (parseInt(arr1[i]) < parseInt(arr2[j])) {
      return -1;
    } else {
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    if (parseInt(arr1[i]) > 0) return 1;
    i++;
  }
  while (j < arr2.length) {
    if (parseInt(arr2[j]) > 0) return -1;
    j++;
  }
  return 0;
}
module.exports = {
  compare: compare,
};
