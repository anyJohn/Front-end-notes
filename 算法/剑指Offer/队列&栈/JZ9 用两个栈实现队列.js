let stackPush = [];
let stackPop = [];
function push(node) {
  // write code here
  stackPush.push(node);
}
function pop() {
  // write code here
  if (!stackPop.length) {
    while (stackPush.length) {
      stackPop.push(stackPush.pop());
    }
  }
  return stackPop.pop();
}
module.exports = {
  push: push,
  pop: pop,
};
