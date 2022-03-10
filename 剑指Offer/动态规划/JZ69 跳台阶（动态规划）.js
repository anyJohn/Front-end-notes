function jumpFloor(number) {
  // write code here
  const dp = [];
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= number; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[number];
}
module.exports = {
  jumpFloor: jumpFloor,
};
