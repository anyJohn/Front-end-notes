/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  // write code here
  const dfsHeight = (root) => {
    if (!root) return 0;
    let leftHeight = dfsHeight(root.left);
    if (leftHeight === -1) return -1;
    let rightHeight = dfsHeight(root.right);
    if (rightHeight === -1) return -1;
    return Math.abs(leftHeight - rightHeight) <= 1
      ? Math.max(leftHeight, rightHeight) + 1
      : -1;
  };
  return dfsHeight(pRoot) !== -1;
}
module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
};
