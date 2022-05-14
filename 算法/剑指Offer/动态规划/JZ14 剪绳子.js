/**
  状态转移方程
  假设对长度为i的绳子剪出的第一段绳子的长度是j（1 <= j < i），则有
  以下两种情况
  - 将i剪成j和i-j的绳子，且i-j不再继续剪，此时乘积为j*(i-j);
  - 将i剪成j和i-j的绳子，且i-j继续剪成多段长度的绳子，此时乘积是j*dp[i-j]
  dp[i] = Math.max(j*(i-j),j*dp[i-1])
  */

function cutRope(number) {
  const dp = [];
  dp[2] = 1;
  for (let i = 3; i <= number; i++) {
    for (let j = 1; j < i - 1; j++) {
      if (!dp[i]) dp[i] = 0;
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[number];
}
module.exports = {
  cutRope: cutRope,
};
