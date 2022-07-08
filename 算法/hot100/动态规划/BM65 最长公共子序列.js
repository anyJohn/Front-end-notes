/**
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
function LCS(s1, s2) {
  // write code here
  if (!s1.length || !s2.length) return -1;
  const dp = [];
  for (let i = 0; i <= s1.length; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = '';
        continue;
      }
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      } else {
        let l1 = dp[i - 1][j].length;
        let l2 = dp[i][j - 1].length;
        dp[i][j] = l1 >= l2 ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }
  let result = dp[s1.length][s2.length];
  if (result === '') return -1;
  return result;
}
module.exports = {
  LCS: LCS,
};
