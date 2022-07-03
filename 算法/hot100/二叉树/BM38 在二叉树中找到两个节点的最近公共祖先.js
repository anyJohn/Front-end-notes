/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * dfs 中序遍历
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
  // write code here
  if (!root) return false;
  if (root.val === o1 || root.val === o2) return root.val;
  let left = lowestCommonAncestor(root.left, o1, o2);
  let right = lowestCommonAncestor(root.right, o1, o2);
  if (!left) return right;
  if (!right) return left;
  return root.val;
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
