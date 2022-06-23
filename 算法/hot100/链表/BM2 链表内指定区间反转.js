function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  // write code here
  // 定义一个表头来记录
  const node = new ListNode(-1);
  node.next = head;
  // 定义当前节点和前一个节点
  let pre = node;
  let cur = node.next;
  // 循环推进到需要反转处
  for (let i = 1; i < m; i++) {
    pre = pre.next;
    cur = cur.next;
  }
  // 使用temp记录当前节点的后一个节点，防止指针断掉后丢失
  for (let i = m; i < n; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return node.next;
}
module.exports = {
  reverseBetween: reverseBetween,
};
