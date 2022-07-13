/**
 * 分情况讨论，分成了抢第一家和抢最后一家两种情况
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param nums int整型一维数组
 * @return int整型
 */
function rob(nums) {
  // write code here
  // case: rob first
  // case: rob last
  if (nums.length <= 3) {
    return Math.max(...nums);
  }
  let dp = [];
  dp[0] = nums[0];
  dp[1] = nums[0];
  for (let i = 2; i < nums.length - 1; i++) {
    // case: rob first;
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  let res = dp[nums.length - 2];
  dp = [];
  dp[0] = 0;
  dp[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
    // case: rob last;
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return Math.max(res, dp[nums.length - 1]);
}
module.exports = {
  rob: rob,
};
