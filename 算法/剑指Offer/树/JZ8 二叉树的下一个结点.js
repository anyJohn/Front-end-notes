/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  // write code here
  if (!pNode) return pNode;
  if (pNode.right) {
    pNode = pNode.right;
    while (pNode.left) {
      pNode = pNode.left;
    }
    return pNode;
  }
  while (pNode.next) {
    let root = pNode.next;
    if (root.left === pNode) {
      return root;
    }
    pNode = pNode.next;
  }
  return null;
  //   遍历方法，双O(n)
  //   let root = pNode;
  //   while (root.next) {
  //     root = root.next;
  //   }
  //   let arr = [];
  //   const dfs = (node) => {
  //     if (node) {
  //       dfs(node.left);
  //       arr.push(node);
  //       dfs(node.right);
  //     }
  //   };
  //   dfs(root);
  //   return arr[arr.indexOf(pNode) + 1];
}
module.exports = {
  GetNext: GetNext,
};
