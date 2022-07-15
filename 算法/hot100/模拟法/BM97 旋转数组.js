/**
 * 旋转数组
 * @param n int整型 数组长度
 * @param m int整型 右移距离
 * @param a int整型一维数组 给定数组
 * @return int整型一维数组
 */
function solve(n, m, a) {
  // write code here
  let left = a.slice(n - (m % n));
  let right = a.slice(0, n - (m % n));
  return [...left, ...right];
}
module.exports = {
  solve: solve,
};
