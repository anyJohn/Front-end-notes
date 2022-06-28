/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 第二版，代码量更少
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here
  if (!head) return null;
  if (!head.next) return head;
  let pHead = new ListNode(-1);
  pHead.next = head;
  let pre = pHead;
  // 删除判断
  while (pre.next && pre.next.next) {
    if (pre.next.val === pre.next.next.val) {
      let temp = pre.next.val;
      while (pre.next && pre.next.val === temp) {
        pre.next = pre.next.next;
      }
    } else {
      pre = pre.next;
    }
  }
  return pHead.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
/**
 * 第一版
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here
  if (!head) return null;
  if (!head.next) return head;
  let fast = head.next;
  let slow = head;
  let pHead = new ListNode(-1);
  let pre = pHead;
  pre.next = slow;
  // 删除判断
  let mark = false;
  while (fast) {
    if (fast.val === slow.val) {
      mark = true;
      fast = fast.next;
    }
    if (!fast || fast.val !== slow.val) {
      if (mark) {
        pre.next = fast;
        slow = fast;
        if (fast) fast = fast.next;
        mark = false;
      } else {
        pre = slow;
        if (fast) fast = fast.next;
        slow = slow.next;
      }
    }
  }
  return pHead.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
