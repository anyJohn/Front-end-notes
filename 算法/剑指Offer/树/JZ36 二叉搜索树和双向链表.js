// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }
function Convert(pRootOfTree) {
  if (!pRootOfTree) return;
  let head = null;
  let pre = null;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    if (!pre) {
      head = node;
    } else {
      pre.right = node;
    }
    node.left = pre;
    pre = node;
    dfs(node.right);
  };
  dfs(pRootOfTree);
  return head;
}
module.exports = {
  Convert: Convert,
};
