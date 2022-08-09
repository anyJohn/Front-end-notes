/**
 * 贪心算法，如果后一天比今天高，那么就买入卖出，计算利润。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || !prices.length) return;
  let left = 0;
  let right = 1;
  let sum = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      sum += prices[right] - prices[left];
    }
    left++;
    right++;
  }
  return sum;
};
