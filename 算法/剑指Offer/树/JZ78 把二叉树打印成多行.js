/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  if (!pRoot) return [];
  const queue = [];
  const result = [];
  queue.push(pRoot);
  while (queue.length) {
    let tempArr = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      tempArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(tempArr);
  }
  return result;
}
module.exports = {
  Print: Print,
};
