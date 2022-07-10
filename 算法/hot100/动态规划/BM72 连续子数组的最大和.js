function FindGreatestSumOfSubArray(array) {
  // write code here
  const dp = [];
  dp[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
  }
  return Math.max(...dp);
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};
