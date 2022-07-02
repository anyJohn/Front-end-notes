/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  // write code here
  if (!pRoot) return true;
  const compare = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return compare(left.left, right.right) && compare(left.right, right.left);
  };
  return compare(pRoot.left, pRoot.right);
}
module.exports = {
  isSymmetrical: isSymmetrical,
};
