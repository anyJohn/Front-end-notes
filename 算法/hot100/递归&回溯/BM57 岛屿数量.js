/**
 * 关键点在于，置零操作，
 * 把已经遍历过的节点置零，这样就不会重复遍历
 * 判断岛屿数量
 * @param grid string字符串型二维数组
 * @return int整型
 */
function solve(grid) {
  // write code here
  if (!grid.length) return 0;
  if (!grid[0].length) return 0;
  let count = 0;
  const dfs = (x, y) => {
    if (grid[x][y] === '0') return;
    if (grid[x][y] === '1') {
      grid[x][y] = '0';
      if (x - 1 >= 0) {
        dfs(x - 1, y);
      }
      if (x + 1 < grid.length) {
        dfs(x + 1, y);
      }
      if (y - 1 >= 0) {
        dfs(x, y - 1);
      }
      if (y + 1 < grid[0].length) {
        dfs(x, y + 1);
      }
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}
module.exports = {
  solve: solve,
};
