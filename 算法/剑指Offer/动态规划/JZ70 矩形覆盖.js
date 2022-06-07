// 斐波那契数列 时间O(n)，空间O(1)优化解法
function rectCover(number) {
  // write code here
  if (number === 0) return 0;
  if (number <= 2) return number;
  let preDp = 1;
  let dp = 2;
  let resDp = 0;
  for (let i = 3; i <= number; i++) {
    resDp = dp + preDp;
    preDp = dp;
    dp = resDp;
  }
  return resDp;
}
module.exports = {
  rectCover: rectCover,
};

// // 斐波那契数列 双O(n)解法
// function rectCover(number) {
//   // write code here
//   if (number === 0) return 0;
//   const dp = [];
//   dp[1] = 1;
//   dp[2] = 2;
//   for (let i = 3; i <= number; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[number];
// }
// module.exports = {
//   rectCover: rectCover,
// };
