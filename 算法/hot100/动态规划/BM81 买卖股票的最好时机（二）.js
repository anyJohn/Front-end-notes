/**
 * 分情况讨论，即在第i天，分成持有股票和没持有股票两种情况
 * 持有股票也分刚刚买入，和之前就持有了两种情况
 * 没持有股票也分刚刚卖出和一直没持有两种情况
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算最大收益
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
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
}
module.exports = {
  maxProfit: maxProfit,
};
