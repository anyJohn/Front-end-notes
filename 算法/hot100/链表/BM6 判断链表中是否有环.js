/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 快慢指针
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here
  let fast = head;
  let slow = head;
  while (fast && slow) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
module.exports = {
  hasCycle: hasCycle,
};
