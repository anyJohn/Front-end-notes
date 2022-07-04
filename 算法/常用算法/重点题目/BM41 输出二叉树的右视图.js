/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 求二叉树的右视图
 * @param xianxu int整型一维数组 先序遍历
 * @param zhongxu int整型一维数组 中序遍历
 * @return int整型一维数组
 */
function solve(xianxu, zhongxu) {
  // write code here
  const result = [];
  let root = buildTree(xianxu, zhongxu);
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let node = null;
    while (size--) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(node.val);
  }
  return result;
}
function buildTree(pre, mid) {
  if (!pre.length || !mid.length) return null;
  let node = new TreeNode(pre[0]);
  let index = mid.indexOf(pre[0]);
  node.left = buildTree(pre.slice(1, index + 1), mid.slice(0, index));
  node.right = buildTree(
    pre.slice(index + 1, pre.length),
    mid.slice(index + 1, mid.length)
  );
  return node;
}
module.exports = {
  solve: solve,
};
