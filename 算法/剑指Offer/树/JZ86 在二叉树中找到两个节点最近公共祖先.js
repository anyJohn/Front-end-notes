/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
// BFS结合map、set的做法。
function lowestCommonAncestor(root, o1, o2) {
  // write code here
  if (o1 === o2) return o1;
  const queue = [];
  // const result = [];
  const res = o1;
  const parent = new Map();
  parent.set(root.val, NaN);
  queue.unshift(root);
  while (queue.length) {
    let node = queue.pop();
    // result.push(node.val);
    if (node.left) {
      parent.set(node.left.val, node.val);
      queue.unshift(node.left);
    }
    if (node.right) {
      parent.set(node.right.val, node.val);
      queue.unshift(node.right);
    }
  }
  let o1Parent = new Set();
  while (parent.has(o1)) {
    o1Parent.add(o1);
    o1 = parent.get(o1);
  }
  while (!o1Parent.has(o2)) {
    o2 = parent.get(o2);
  }
  return o2;
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
