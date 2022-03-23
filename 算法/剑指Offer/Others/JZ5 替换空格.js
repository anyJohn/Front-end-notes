/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param s string字符串
 * @return string字符串
 */
function replaceSpace(s) {
  // write code here
  return s.replace(/\s/g, "%20");
}
module.exports = {
  replaceSpace: replaceSpace,
};
