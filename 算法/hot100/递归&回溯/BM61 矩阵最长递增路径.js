/**
 * 使用了一个dp数组来存储已经走过的路径的最长距离
 * 来降低复杂度，来达到双(mn)的复杂度
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 递增路径的最大长度
 * @param matrix int整型二维数组 描述矩阵的每个数
 * @return int整型
 */
function solve(matrix) {
  // write code here
  if (!matrix.length) return 0;
  if (!matrix[0].length) return 0;
  let result = 0;
  const dp = [];
  const dfs = (i, j, pre) => {
    if (pre >= matrix[i][j]) return 0;
    if (dp[i] && dp[i][j]) return dp[i][j];
    let count = 0;
    if (i - 1 >= 0) {
      count = Math.max(count, dfs(i - 1, j, matrix[i][j]));
    }
    if (i + 1 < matrix.length) {
      count = Math.max(count, dfs(i + 1, j, matrix[i][j]));
    }
    if (j - 1 >= 0) {
      count = Math.max(count, dfs(i, j - 1, matrix[i][j]));
    }
    if (j + 1 < matrix[0].length) {
      count = Math.max(count, dfs(i, j + 1, matrix[i][j]));
    }
    if (dp[i]) {
      dp[i][j] = count + 1;
    } else {
      dp[i] = [];
      dp[i][j] = count + 1;
    }
    return count + 1;
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }
  return result;
}
module.exports = {
  solve: solve,
};
