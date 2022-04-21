/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param matrix char字符型二维数组
 * @param word string字符串
 * @return bool布尔型
 */
function hasPath(matrix, word) {
  // write code here
  let words = word.split("");
  const dfs = (i, j, count) => {
    if (
      i > matrix.length - 1 ||
      i < 0 ||
      j > matrix[0].length ||
      j < 0 ||
      matrix[i][j] !== words[count]
    )
      return false;
    if (count === words.length - 1) return true;
    let temp = matrix[i][j];
    matrix[i][j] = NaN;
    let result =
      dfs(i - 1, j, count + 1) ||
      dfs(i + 1, j, count + 1) ||
      dfs(i, j - 1, count + 1) ||
      dfs(i, j + 1, count + 1);
    matrix[i][j] = temp;
    return result;
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
}
module.exports = {
  hasPath: hasPath,
};
