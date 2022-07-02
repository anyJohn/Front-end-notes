/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * @param root TreeNode类
 * @return int整型二维数组
 */
function levelOrder(root) {
  // write code here
  if (!root) return [];
  let queue = [];
  let result = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let aTemp = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      aTemp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(aTemp);
  }
  return result;
}
module.exports = {
  levelOrder: levelOrder,
};
