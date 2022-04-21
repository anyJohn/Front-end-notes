function movingCount(threshold, rows, cols) {
  // write code here
  if (threshold <= 0) return 1;
  const visited = [];
  for (let i = 0; i < rows; i++) {
    visited[i] = [];
  }
  let result = 0;
  const check = (n) => {
    let sum = 0;
    while (n >= 1) {
      sum += n % 10;
      n /= 10;
    }
    return Math.floor(sum);
  };
  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j]) return;
    if (check(i) + check(j) > threshold) return;
    visited[i][j] = true;
    result++;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  dfs(0, 0);
  return result;
}
module.exports = {
  movingCount: movingCount,
};
