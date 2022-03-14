/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  if (!root) return [];
  const queue = [];
  const result = [];
  queue.unshift(root);
  while (queue.length) {
    let node = queue.pop();
    result.push(node.val);
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
  }
  return result;
}
module.exports = {
  PrintFromTopToBottom: PrintFromTopToBottom,
};
