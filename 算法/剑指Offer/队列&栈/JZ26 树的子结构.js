/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  let isSame = (root1, root2) => {
    if (!root2) return true;
    if (!root1 || root1.val !== root2.val) return false;
    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
  };
  // write code here
  if (!pRoot1 || !pRoot2) return false;
  // 递归判断左子树是否包含B，右子树是否包含B，当前节点是否包含B
  return (
    isSame(pRoot1, pRoot2) ||
    HasSubtree(pRoot1.left, pRoot2) ||
    HasSubtree(pRoot1.right, pRoot2)
  );
}
module.exports = {
  HasSubtree: HasSubtree,
};
