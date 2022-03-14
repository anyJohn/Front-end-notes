/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  // write code here
  if (!pHead) {
    return null;
  }
  let previous = null;
  let next = null;
  while (pHead) {
    next = pHead.next;
    pHead.next = previous;
    previous = pHead;
    pHead = next;
  }
  return previous;
}
module.exports = {
  ReverseList: ReverseList,
};
