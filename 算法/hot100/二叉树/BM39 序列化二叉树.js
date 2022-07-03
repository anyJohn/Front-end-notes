function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
const nullMark = '#';
function Serialize(pRoot) {
  // write code here
  if (!pRoot) return '';
  const queue = [];
  let result = '';
  queue.push(pRoot);
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      result += node.val + ',';
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result += `${nullMark},`;
    }
  }
  return result;
}
function Deserialize(s) {
  // write code here
  if (!s) return null;
  let arr = s.split(',');
  arr.pop();
  let queue = [];
  let index = 0;
  let root = new TreeNode(arr.shift());
  queue.push(root);
  while (arr.length) {
    let node = queue.shift();
    let left = arr.shift();
    if (left !== nullMark) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    let right = arr.shift();
    if (right !== nullMark) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
};
