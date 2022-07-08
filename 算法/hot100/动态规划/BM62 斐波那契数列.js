function Fibonacci(n) {
  // write code here
  if (n === 1 || n === 2) return 1;
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}
module.exports = {
  Fibonacci: Fibonacci,
};
