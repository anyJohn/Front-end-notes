/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param root TreeNode类
 * @param sum int整型
 * @return int整型
 */
// 时间复杂度O(n^2)，使用map有更优解
let result = 0;
const DFS = (root, preSum) => {
  if (!root) return;
  preSum -= root.val;
  if (preSum === 0) {
    result++;
  }
  DFS(root.left, preSum);
  DFS(root.right, preSum);
};
function FindPath(root, sum) {
  // write code here
  if (!root) return 0;
  DFS(root, sum);
  FindPath(root.left, sum);
  FindPath(root.right, sum);
  return result;
}
module.exports = {
  FindPath: FindPath,
};
