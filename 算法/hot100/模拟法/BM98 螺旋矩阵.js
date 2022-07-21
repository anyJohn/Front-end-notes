/**
 * 模拟法，模拟不断旋转的过程，同时不断更新边界
 * @param matrix int整型二维数组
 * @return int整型一维数组
 */
class Maplx {
  constructor(args) {
    this.data = args;
    this.top = 0;
    this.bottom = args.length - 1;
    this.left = 0;
    if (args[0]) {
      this.right = args[0].length - 1;
    }
    //         Object.freeze(this);
  }
  getArray() {
    if (this.bottom < 0 || this.right < 0) {
      return [];
    }
    if (this.bottom === 0) {
      return this.data[0];
    }
    const result = [];
    while (this.left <= this.right && this.top <= this.bottom) {
      for (let i = this.left; i <= this.right; i++) {
        result.push(this.data[this.top][i]);
      }
      this.top++;
      if (this.top > this.bottom) break;
      for (let i = this.top; i <= this.bottom; i++) {
        result.push(this.data[i][this.right]);
      }
      this.right--;
      if (this.left > this.right) break;
      for (let i = this.right; i >= this.left; i--) {
        result.push(this.data[this.bottom][i]);
      }
      this.bottom--;
      if (this.top > this.bottom) break;
      for (let i = this.bottom; i >= this.top; i--) {
        result.push(this.data[i][this.left]);
      }
      this.left++;
      if (this.left > this.right) break;
    }
    return result;
  }
}
function spiralOrder(matrix) {
  // write code here
  let maplx = new Maplx(matrix);
  return maplx.getArray();
}
module.exports = {
  spiralOrder: spiralOrder,
};
