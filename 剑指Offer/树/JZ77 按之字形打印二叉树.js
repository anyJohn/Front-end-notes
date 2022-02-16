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
  let index = 1;
  queue.unshift(pRoot);
  while (queue.length) {
    let temp = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue[0];
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      queue.shift();
    }
    // 偶数层反转
    if (index % 2 === 0) temp.reverse();
    result.push(temp);
    index++;
  }
  return result;
}
module.exports = {
  Print: Print,
};
