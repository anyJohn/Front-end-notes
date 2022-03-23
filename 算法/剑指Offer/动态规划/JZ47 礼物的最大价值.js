/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param grid int整型二维数组
 * @return int整型
 */
function maxValue(grid) {
  // write code here
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 && i === 0) continue;
      if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
      }
      if (j === 0 && i > 0) {
        grid[i][j] += grid[i - 1][j];
      }
      if (i > 0 && j > 0) {
        grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  return grid[m - 1][n - 1];
}
module.exports = {
  maxValue: maxValue,
};
