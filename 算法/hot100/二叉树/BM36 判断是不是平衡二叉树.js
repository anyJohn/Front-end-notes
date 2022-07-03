/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 层级遍历递归解法，时间复杂度O(NlogN)，空间复杂度O(n)
 * @param {*} pRoot
 * @param {*} height
 * @returns
 */
function IsBalanced_Solution(pRoot, height = 0) {
  // write code here
  if (!pRoot) return true;
  return judge(pRoot);
}
function judge(root) {
  if (!root) return true;
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
    judge(root.left) &&
    judge(root.right)
  );
}
// 层级遍历取深度
function getDepth(root) {
  if (!root) return 0;
  const queue = [];
  queue.push(root);
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  console.log(depth);
  return depth;
}
// 递归取深度
function getDepth(root) {
  if (!root) return 0;
  let left = getDepth(root.left);
  let right = getDepth(root.right);
  return Math.max(left + 1, right + 1);
}
// 优化，在取得深度的时候做判断，复杂度双O(n)

module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
};
