let minStack = [];
let stack = [];
function push(node) {
  // write code here
  if (!minStack.length) {
    minStack.push(node);
  } else {
    minStack.push(Math.min(node, minStack[minStack.length - 1]));
  }
  return stack.push(node);
}
function pop() {
  // write code here
  minStack.pop();
  return stack.pop();
}
function top() {
  // write code here
  return stack[stack.length - 1];
}
function min() {
  // write code here
  return minStack[minStack.length - 1];
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
