/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 快慢指针解法，单O(n)
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  // write code here
  // 快慢指针
  let fast = head;
  let slow = head;
  // 找到中间
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    // 奇数
    slow = slow.next;
  }
  // 反转后半部分
  let rSlow = reverse(slow);
  // 跟head进行对比
  while (rSlow) {
    if (rSlow.val !== head.val) {
      return false;
    }
    rSlow = rSlow.next;
    head = head.next;
  }
  return true;
}
// 反转链表函数
function reverse(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
/**
 * 双O(n)解法
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  // write code here
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let rArr = arr.slice().reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== rArr[i]) {
      return false;
    }
  }
  return true;
}
module.exports = {
  isPail: isPail,
};
