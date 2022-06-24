function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 快慢指针
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  // write code here
  let cur = head;
  let slow = head;
  let pre = new ListNode(-1);
  pre.next = slow;
  let count = 0;
  // 找到需要删除的结点
  while (cur) {
    cur = cur.next;
    count++;
    if (count >= n + 1) {
      pre = slow;
      slow = slow.next;
    }
  }
  // 删除结点
  // 前一个结点连接到下一个结点
  if (slow === head) {
    return head.next;
  }
  pre.next = slow.next;
  return head;
}
module.exports = {
  removeNthFromEnd: removeNthFromEnd,
};
