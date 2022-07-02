/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  if (!pRoot) return [];
  const result = [];
  const queue = [];
  queue.push(pRoot);
  let mark = false;
  while (queue.length) {
    let aTemp = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      aTemp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (mark) {
      result.push(aTemp.reverse());
    } else {
      result.push(aTemp);
    }
    mark = !mark;
  }
  return result;
}
module.exports = {
  Print: Print,
};
