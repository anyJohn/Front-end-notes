/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 递归左右子树
 * @param root TreeNode类
 * @param sum int整型
 * @return bool布尔型
 */
function hasPathSum(root, sum) {
  // write code here
  if (!root) return false;
  sum -= root.val;
  if (sum === 0 && !root.left && !root.right) return true;
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
module.exports = {
  hasPathSum: hasPathSum,
};
