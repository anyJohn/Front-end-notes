/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function StrToInt(s) {
  // write code here
  s = s.trim();
  let flag = 1;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-' && i === 0) {
      flag = -1;
    } else if (s[i] === '+' && i === 0) {
      flag = 1;
    } else if (s[i] <= '9' && s[i] >= '0') {
      result += s[i];
    } else {
      break;
    }
  }
  result = Number(result) * flag;
  if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1;
  }
  if (result < -Math.pow(2, 31)) {
    result = -Math.pow(2, 31);
  }
  if (!result) result = 0;
  return result;
}
module.exports = {
  StrToInt: StrToInt,
};
