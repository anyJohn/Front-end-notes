function ListNode(x) {
  this.val = x;
  this.next = null;
}
function deleteDuplication(pHead) {
  // write code here
  let dummy = new ListNode(-1);
  let tail = dummy;
  while (pHead) {
    if (pHead.next == null || pHead.next.val !== pHead.val) {
      tail.next = pHead;
      tail = pHead;
    }
    while (pHead.next != null && pHead.val === pHead.next.val) {
      pHead = pHead.next;
    }
    pHead = pHead.next;
  }
  return dummy.next;
}
module.exports = {
  deleteDuplication: deleteDuplication,
};
