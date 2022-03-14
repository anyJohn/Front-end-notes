let stack = [];
let stack_min = [];
function push(node) {
  // write code here
  if (!stack_min.length) {
    stack_min.push(node);
  } else {
    let min = Math.min(stack_min[stack_min.length - 1], node);
    stack_min.push(min);
  }
  return stack.push(node);
}
function pop() {
  // write code here
  if (!stack.length) return null;
  stack_min.pop();
  return stack.pop();
}
function top() {
  // write code here
  if (!stack.length) return null;
  return stack[stack.length - 1];
}
function min() {
  // write code here
  if (!stack.length) return null;
  return stack_min[stack_min.length - 1];
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
