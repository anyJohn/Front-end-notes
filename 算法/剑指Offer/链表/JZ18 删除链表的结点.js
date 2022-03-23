/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */
function deleteNode(head, val) {
  // write code here
  if (head.val === val) {
    head = head.next;
    return head;
  }
  let cur = head;
  let pre = null;
  while (cur.val !== val) {
    pre = cur;
    cur = cur.next;
  }
  pre.next = cur.next;
  return head;
}
module.exports = {
  deleteNode: deleteNode,
};
