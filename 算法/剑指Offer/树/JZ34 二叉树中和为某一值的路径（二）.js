/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath(root, expectNumber) {
  // write code here
  let sum = 0;
  let array = [];
  let result = [];
  const DFS = (root) => {
    if (root) {
      sum += root.val;
      array.push(root.val);
      if (sum === expectNumber && !root.left && !root.right) {
        result.push([...array]);
      } else {
        DFS(root.left);
        DFS(root.right);
      }
      array.pop();
      sum -= root.val;
    }
  };
  DFS(root);
  return result;
}
module.exports = {
  FindPath: FindPath,
};
