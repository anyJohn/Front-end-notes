/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 合并二叉树，递归
 * @param t1 TreeNode类
 * @param t2 TreeNode类
 * @return TreeNode类
 */
function mergeTrees(t1, t2) {
  // write code here
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
}
module.exports = {
  mergeTrees: mergeTrees,
};
