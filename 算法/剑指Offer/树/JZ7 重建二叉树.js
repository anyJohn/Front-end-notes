function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  if (!pre || !vin) return null;
  // write code here
  const preNodeList = [];
  const vinNodeList = [];
  for (let i = 0; i < pre.length; i++) {
    preNodeList.push(pre[i]);
    vinNodeList.push(vin[i]);
  }
  const buildTree = (preNodeList, vinNodeList) => {
    if (!preNodeList.length || !vinNodeList.length) return null;
    // 前序遍历第一个就是根节点
    let rootVal = preNodeList.shift();
    let root = new TreeNode(rootVal);
    let mid = vinNodeList.indexOf(rootVal);
    root.left = buildTree(preNodeList, vinNodeList.slice(0, mid));
    root.right = buildTree(
      preNodeList,
      vinNodeList.slice(mid + 1, vinNodeList.length)
    );
    return root;
  };
  return buildTree(preNodeList, vinNodeList);
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
