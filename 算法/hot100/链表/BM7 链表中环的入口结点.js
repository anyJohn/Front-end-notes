/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 单O(n)解法，快慢指针
 * @param {*} pHead
 * @returns
 */
function EntryNodeOfLoop(pHead) {
  // write code here
  let fast = pHead;
  let slow = pHead;
  while (fast && slow) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    slow = slow.next;
    if (slow === fast) {
      // 存在环
      // 重置快指针到链表头部
      fast = pHead;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast;
    }
  }
}

/**
 * 双O(n) set解法
 * @param {*} pHead
 * @returns
 */
function EntryNodeOfLoop(pHead) {
  // write code here
  let set = new Set();
  while (pHead) {
    if (set.has(pHead.val)) {
      return pHead;
    }
    set.add(pHead.val);
    pHead = pHead.next;
  }
  return null;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
