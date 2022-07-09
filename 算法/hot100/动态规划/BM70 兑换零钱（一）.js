/**
 * 以dp[i]表示 i 元需要的最少货币张数，那么
 * 第i的货币最小货币张数就是
 * min(dp[i], dp[i - arr[j]] + 1);
 * 也就是，取当前货币，和不取当前货币，取的话，
 * 也就是 1（当前货币张数） + 剩余需要取的货币的最小张数
 * 最少货币数
 * @param arr int整型一维数组 the array
 * @param aim int整型 the target
 * @return int整型
 */
function minMoney(arr, aim) {
  // write code here
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i <= aim; i++) {
    dp[i] = Infinity;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1);
      }
    }
  }
  return dp[aim] > aim ? -1 : dp[aim];
}
module.exports = {
  minMoney: minMoney,
};
