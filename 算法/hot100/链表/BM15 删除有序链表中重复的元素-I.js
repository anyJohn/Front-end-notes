function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 单O(n)解法
 * @param {*} head
 * @returns
 */
function deleteDuplicates(head) {
  // write code here
  if (!head) return null;
  if (!head.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast) {
    if (slow.val !== fast.val) {
      slow = fast;
      fast = fast.next;
    } else {
      if (fast.next) {
        slow.next = fast.next;
      } else {
        slow.next = null;
      }
      fast = fast.next;
    }
  }
  return head;
}
/**
 * 双O(n)解法
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here
  let set = new Set();
  let cur = head;
  while (cur) {
    set.add(cur.val);
    cur = cur.next;
  }
  let rHead = new ListNode(-1);
  let node = rHead;
  for (const item of set) {
    node.next = new ListNode(item);
    node = node.next;
  }
  return rHead.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
