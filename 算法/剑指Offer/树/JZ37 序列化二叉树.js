function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Serialize(pRoot) {
  // write code here
  if (!pRoot) return '';
  const queue = [];
  queue.unshift(pRoot);
  let result = '';
  result += pRoot.val + ',';
  while (queue.length) {
    let node = queue.pop();
    if (node.left) {
      result += node.left.val + ',';
      queue.unshift(node.left);
    } else {
      result += '#,';
    }
    if (node.right) {
      result += node.right.val + ',';
      queue.unshift(node.right);
    } else {
      result += '#,';
    }
  }
  return result.slice(0, result.length - 1);
}
function Deserialize(s) {
  // write code here
  if (!s.length) return null;
  s = s.split(',');
  const queue = [];
  const pRoot = new TreeNode(s[0]);
  queue.unshift(pRoot);
  let i = 1;
  while (queue.length) {
    let node = queue.pop();
    if (s[i] !== '#') {
      node.left = new TreeNode(s[i]);
      queue.unshift(node.left);
    }
    i++;
    if (s[i] !== '#') {
      node.right = new TreeNode(s[i]);
      queue.unshift(node.right);
    }
    i++;
  }
  return pRoot;
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
};
