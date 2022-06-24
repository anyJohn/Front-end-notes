/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 快慢指针
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here
  let cur = pHead;
  let slow = pHead;
  let count = 0;
  while (cur) {
    cur = cur.next;
    count++;
    if (count >= k + 1) {
      slow = slow.next;
    }
  }
  if (count < k) {
    return null;
  }
  return slow;
}
module.exports = {
  FindKthToTail: FindKthToTail,
};
