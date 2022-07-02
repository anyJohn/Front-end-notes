/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 用层级遍历，如果遍历中间出现空节点，则为不完全二叉树
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param root TreeNode类
 * @return bool布尔型
 */
function isCompleteTree(root) {
  // write code here
  const queue = [];
  queue.push(root);
  let mark = false;
  while (queue.length) {
    let node = queue.shift();
    if (!node) {
      mark = true;
    } else {
      if (mark) {
        return false;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
}
module.exports = {
  isCompleteTree: isCompleteTree,
};
