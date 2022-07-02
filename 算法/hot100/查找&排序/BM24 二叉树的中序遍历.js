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
 * @return int整型一维数组
 */
function inorderTraversal(root) {
  // write code here
  if (!root) return [];
  const result = [];
  const dfs = (pRoot) => {
    if (!pRoot) return null;
    if (pRoot.left) dfs(pRoot.left);
    result.push(pRoot.val);
    if (pRoot.right) dfs(pRoot.right);
  };
  dfs(root);
  return result;
}
module.exports = {
  inorderTraversal: inorderTraversal,
};
