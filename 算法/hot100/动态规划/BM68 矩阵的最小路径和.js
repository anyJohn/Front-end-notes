/**
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
function minPathSum(matrix) {
  // write code here
  if (!matrix[0].length) {
    return null;
  }
  const dp = [];
  for (let i = 0; i < matrix.length; i++) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = matrix[i][j];
      } else if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + matrix[i][j];
      } else if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][j] + matrix[i][j];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + matrix[i][j],
          dp[i][j - 1] + matrix[i][j]
        );
      }
    }
  }
  return dp[matrix.length - 1][matrix[0].length - 1];
}
module.exports = {
  minPathSum: minPathSum,
};
