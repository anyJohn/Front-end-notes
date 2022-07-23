/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param mat int整型二维数组
 * @param n int整型
 * @return int整型二维数组
 */
class Matrix {
  constructor(mat, n) {
    this.data = mat;
    this.length = n;
  }
  rotate() {
    let data = this.data;
    let length = this.length;
    if (!data.length) return data;
    if (!data[0].length) return data;
    let temp = [];
    for (let i = 0; i < length; i++) {
      temp.push([]);
    }
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        temp[j][length - i - 1] = data[i][j];
      }
    }
    return temp;
  }
}
function rotateMatrix(mat, n) {
  // write code here
  let matrix = new Matrix(mat, n);
  return matrix.rotate();
}
module.exports = {
  rotateMatrix: rotateMatrix,
};
