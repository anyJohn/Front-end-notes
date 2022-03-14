/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param s string字符串
 * @return int整型
 */
function lengthOfLongestSubstring(s) {
  // write code here
  if (s.length === 0 || s.length === 1) return s.length;
  let max = 0;
  let last = 0;
  const maps = new Map();
  for (let i = 0; i < s.length; i++) {
    if (maps.has(s[i])) {
      last = Math.min(last + 1, i - maps.get(s[i]));
    } else {
      last = last + 1;
    }
    max = Math.max(last, max);
    maps.set(s[i], i);
  }
  return max;
}
module.exports = {
  lengthOfLongestSubstring: lengthOfLongestSubstring,
};
