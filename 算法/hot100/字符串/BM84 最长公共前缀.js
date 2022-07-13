/**
 * 贪心法，假设第一个字符是前缀，
 * 先砍长度，再砍掉不同的字符
 * @param strs string字符串一维数组
 * @return string字符串
 */
function longestCommonPrefix(strs) {
  // write code here
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let pre = strs[0];
  for (const str of strs) {
    pre = pre.slice(0, str.length);
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== pre[i]) {
        pre = pre.slice(0, i);
      }
    }
  }
  return pre;
}
module.exports = {
  longestCommonPrefix: longestCommonPrefix,
};
