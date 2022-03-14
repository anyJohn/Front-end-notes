function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead) {
  // write code here
  if (!pHead) return pHead;
  const nodeMap = new Map();
  let dummy = new RandomListNode(-1);
  let node = dummy;
  let pre = pHead;
  while (pre) {
    let temp = new RandomListNode(-1);
    temp.label = pre.label;
    nodeMap.set(pre, temp);
    pre = pre.next;
  }
  while (pHead) {
    node.next = nodeMap.get(pHead);
    node.next.next = nodeMap.get(pHead.next);
    node.next.random = nodeMap.get(pHead.random);
    node = node.next;
    pHead = pHead.next;
  }
  return dummy.next;
}
module.exports = {
  Clone: Clone,
};
