/**
 * 反转字符串
 * @param str string字符串
 * @return string字符串
 */
function solve(str) {
  // write code here
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
module.exports = {
  solve: solve,
};
