/**
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
function uniquePaths(m, n) {
  // write code here
  if (!m || !n) return 0;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 1 || j === 1) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m][n];
}
module.exports = {
  uniquePaths: uniquePaths,
};
