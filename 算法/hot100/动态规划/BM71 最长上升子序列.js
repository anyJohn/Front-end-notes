/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 给定数组的最长严格上升子序列的长度。
 * @param arr int整型一维数组 给定的数组
 * @return int整型
 */
function LIS(arr) {
  // write code here
  if (!arr.length) return 0;
  const dp = [];
  dp[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
}
module.exports = {
  LIS: LIS,
};
