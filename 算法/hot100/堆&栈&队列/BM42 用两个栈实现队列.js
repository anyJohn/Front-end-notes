let stack = [];
function push(node) {
  // write code here
  return stack.push(node);
}
function pop() {
  // write code here
  return stack.shift();
}
module.exports = {
  push: push,
  pop: pop,
};
