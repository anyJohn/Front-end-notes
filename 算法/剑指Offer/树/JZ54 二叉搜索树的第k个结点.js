/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
function KthNode(proot, k) {
  // write code here
  if (!proot || !k) return -1;
  let rank = 0;
  let stack = [];
  const traverse = (node) => {
    if (!node) return;
    if (node.left) traverse(node.left);
    stack.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(proot);
  if (k > stack.length) return -1;
  console.log(stack);
  return stack[k - 1];
}
module.exports = {
  KthNode: KthNode,
};
