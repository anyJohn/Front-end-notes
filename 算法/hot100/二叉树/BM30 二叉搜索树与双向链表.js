function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Convert(pRootOfTree) {
  if (!pRootOfTree) return null;
  let head = null;
  let pre = null;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (!pre) {
      head = root;
    } else {
      pre.right = root;
    }

    root.left = pre;
    pre = root;
    dfs(root.right);
  }
  dfs(pRootOfTree, pre, head);
  return head;
}
module.exports = {
  Convert: Convert,
};
