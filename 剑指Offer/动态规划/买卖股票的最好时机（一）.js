/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  if (prices.length < 2) return 0;
  const dp = [];
  let minPrice = prices[0];
  dp[0] = 0;
  // dp[i] = Math.max(dp[i-1],prices[i]-Math.min(prices[0-i]))
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }
  console.log(dp);
  return dp[prices.length - 1];
}
module.exports = {
  maxProfit: maxProfit,
};
