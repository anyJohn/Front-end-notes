/**
 * 分成了5种情况讨论
 * 0. 没买没卖
 * 1. 买了没卖
 * 2. 买了卖了
 * 3. 买了卖了买了
 * 4. 买了卖了买了卖了
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 两次交易所能获得的最大收益
 * @param prices int整型一维数组 股票每一天的价格
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  let dp = [];
  dp[0] = [];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2] || -Infinity, dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3] || -Infinity, dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4] || -Infinity, dp[i - 1][3] + prices[i]);
  }
  let n = prices.length - 1;
  return Math.max(dp[n][0], dp[n][2], dp[n][4]);
}
module.exports = {
  maxProfit: maxProfit,
};
