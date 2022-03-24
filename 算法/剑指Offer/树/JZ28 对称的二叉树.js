/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  // write code here
  if (!pRoot) return true;
  const compare = (pRoot1, pRoot2) => {
    if (!pRoot1 && !pRoot2) return true;
    if (!pRoot1 || !pRoot2) return false;
    if (pRoot1.val !== pRoot2.val) return false;
    return (
      compare(pRoot1.left, pRoot2.right) && compare(pRoot1.right, pRoot2.left)
    );
  };
  return compare(pRoot.left, pRoot.right);
}
module.exports = {
  isSymmetrical: isSymmetrical,
};
