/**
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */
function solve(nums) {
  // write code here
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= nums.length; i++) {
    if (nums[i - 1] === '0') {
      if (nums[i - 2] > '2') return 0;
      dp[i] = dp[i - 1];
    } else if (
      parseInt(nums[i - 2] + nums[i - 1]) <= 26 &&
      nums[i - 2] !== '0'
    ) {
      dp[i] = dp[i - 2] + dp[i - 1];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[nums.length];
}
module.exports = {
  solve: solve,
};
