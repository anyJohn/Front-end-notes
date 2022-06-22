/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  // write code here
  if (!pHead) return null;
  let pre = null;
  let next = null;
  while (pHead) {
    // 记录下一个节点
    next = pHead.next;
    // 当前节点的next指针指向上一个
    pHead.next = pre;
    // 上一个节点更新到当前节点
    pre = pHead;
    // 当前节点更新到下一个节点
    pHead = next;
  }
  return pre;
}
module.exports = {
  ReverseList: ReverseList,
};
