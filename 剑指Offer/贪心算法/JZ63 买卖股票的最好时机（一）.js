/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  if (prices < 2) return 0;
  let max_profit = 0;
  let min_payment = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min_payment = Math.min(prices[i], min_payment);
    max_profit = Math.max(prices[i] - min_payment, max_profit);
  }
  return max_profit;
}
module.exports = {
  maxProfit: maxProfit,
};
