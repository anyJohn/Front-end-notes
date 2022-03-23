/**
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */
function solve(nums) {
  // write code here
  const arr = nums.split("");
  if (!arr.length) return 0;
  if (arr[0] == 0) return 0;
  const dp = [];
  dp.push(1); // 初始值
  for (let i = 1; i < arr.length; i++) {
    // 等于0的情况
    if (arr[i] == 0) {
      // 类似10的情况
      if (i === 1) {
        dp[i] = 1;
      }
      // 非法结尾
      else if (arr[i - 1] == 0 || arr[i - 1] > 2) {
        return 0;
      }
      // 正常结尾,即10或20结尾
      else if (arr[i - 1] > 0 && arr[i - 1] < 3) {
        dp[i] = dp[i - 2];
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      let param = Number(arr[i - 1] + arr[i]);
      // 结尾两个否符合组成字母的条件
      if (param <= 26 && param >= 10) {
        if (i === 1) {
          dp[i] = 2;
        } else {
          dp[i] = dp[i - 2] + dp[i - 1];
        }
      } else {
        dp[i] = dp[i - 1];
      }
    }
  }
  return dp[nums.length - 1];
}
module.exports = {
  solve: solve,
};
