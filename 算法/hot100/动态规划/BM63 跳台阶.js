function jumpFloor(number) {
  // write code here
  if (number === 1) return 1;
  if (number === 2) return 2;
  const dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < number; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[number - 1];
}
module.exports = {
  jumpFloor: jumpFloor,
};
