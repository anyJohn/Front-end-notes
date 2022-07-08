/**
 * 用一个dp数组去记录最长长度，dp方程理解为，
 * 以当前字符结束的子串，
 * 这样只需要用一个max变量去记录长度即可
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
  // write code here
  if (!str1.length || !str2.length) return '';
  const dp = [];
  let max = 0;
  let pos = 0;
  for (let i = 0; i <= str1.length; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
        continue;
      }
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > max) {
          max = dp[i][j];
          pos = i;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return str1.slice(pos - max, pos);
}
module.exports = {
  LCS: LCS,
};
