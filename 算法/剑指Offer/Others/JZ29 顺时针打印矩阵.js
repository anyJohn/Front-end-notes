// 把遍历一层看作一个过程，逐层地遍历，直到left===right&&top===bottom可知遍历到了中心的值
function printMatrix(matrix) {
  // write code here
  if (!matrix.length || !matrix[0].length) return [];
  let row = matrix.length;
  let col = matrix[0].length;
  const result = [];
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    // 如果还有层
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        result.push(matrix[bottom][i]);
      }
      for (let i = bottom; i > top; i--) {
        result.push(matrix[i][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return result;
}
module.exports = {
  printMatrix: printMatrix,
};
