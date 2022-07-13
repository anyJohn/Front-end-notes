/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  const dp = [];
  let min = prices[0];
  dp[0] = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    dp[i] = Math.max(prices[i] - min, dp[i - 1]);
  }
  return dp[prices.length - 1];
}
module.exports = {
  maxProfit: maxProfit,
};
