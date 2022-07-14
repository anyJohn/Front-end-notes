/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
function solve(s, t) {
  // write code here
  let sTail = s.length - 1;
  let tTail = t.length - 1;
  let isCarry = 0;
  let result = '';
  while (true) {
    let sum = 0;
    if (sTail < 0 && tTail < 0) {
      if (isCarry) {
        result = isCarry + result;
      }
      break;
    }
    if (sTail < 0) {
      sum = parseInt(t[tTail]) + isCarry;
      tTail--;
    } else if (tTail < 0) {
      sum = parseInt(s[sTail]) + isCarry;
      sTail--;
    } else {
      sum = parseInt(s[sTail]) + parseInt(t[tTail]) + isCarry;
      sTail--;
      tTail--;
    }
    isCarry = 0;
    result = (sum % 10) + result;
    if (sum >= 10) {
      isCarry = 1;
    }
  }
  return result;
}
module.exports = {
  solve: solve,
};
