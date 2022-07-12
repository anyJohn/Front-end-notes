/**
 * dp状态转移表达式，如果
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param str1 string字符串
 * @param str2 string字符串
 * @return int整型
 */
function editDistance(str1, str2) {
  // write code here
  const dp = [];
  for (let i = 0; i <= str1.length; i++) {
    if (dp[i] === undefined) dp[i] = [];
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j > 0) {
        dp[i][j] = dp[0][j - 1] + 1;
        continue;
      }
      if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][0] + 1;
        continue;
      }
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
      }
    }
  }
  return dp[str1.length][str2.length];
}
module.exports = {
  editDistance: editDistance,
};
