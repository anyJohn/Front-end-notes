// 面试官爆炸暴力法
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param str string字符串
 * @return bool布尔型
 */
function isNumeric(str) {
  // write code here
  str = str.trim();
  if (str === '0') {
    return true;
  } else {
    return Number(str);
  }
}
module.exports = {
  isNumeric: isNumeric,
};
