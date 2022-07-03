function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
/**
 * 重点在于找到根节点的左右子树对应的字符串，
 * 然后递归生成节点即可
 * @param {*} pre
 * @param {*} vin
 * @returns
 */
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (!pre.length || !vin.length) return null;
  let root = new TreeNode(pre[0]);
  let index = vin.indexOf(pre[0]);
  // 递归左子树
  root.left = reConstructBinaryTree(
    pre.slice(1, index + 1),
    vin.slice(0, index)
  );
  // 递归右子树
  root.right = reConstructBinaryTree(
    pre.slice(index + 1, pre.length),
    vin.slice(index + 1, vin.length)
  );
  return root;
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
