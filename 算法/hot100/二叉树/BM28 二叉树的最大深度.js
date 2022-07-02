/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * DFS或者BFS计算深度
 * @param root TreeNode类
 * @return int整型
 */
function maxDepth(root) {
  // write code here
  if (!root) return 0;
  const queue = [];
  queue.push(root);
  let result = [];
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
  return result.length;
}
module.exports = {
  maxDepth: maxDepth,
};
