function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * 单O(n)解法
 * @param {*} head1
 * @param {*} head2
 * @returns
 */
function addInList(head1, head2) {
  let rHead1 = reverseList(head1);
  let rHead2 = reverseList(head2);
  let mark = 0;
  let head = new ListNode(-1);
  let node = head;
  while (rHead1 || rHead2) {
    let val = mark;
    if (rHead1) {
      val += rHead1.val;
      rHead1 = rHead1.next;
    }
    if (rHead2) {
      val += rHead2.val;
      rHead2 = rHead2.next;
    }
    mark = Math.floor(val / 10);
    node.next = new ListNode(val % 10);
    node = node.next;
  }
  if (mark) {
    node.next = new ListNode(mark);
    node = node.next;
  }
  return reverseList(head.next);
}
function reverseList(head) {
  if (!head) return null;
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
 * 双O(n)做法，辅助栈
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  let stack1 = [];
  let stack2 = [];
  while (head1) {
    stack1.push(head1.val);
    head1 = head1.next;
  }
  while (head2) {
    stack2.push(head2.val);
    head2 = head2.next;
  }
  let cur = null;
  let mark = 0;
  while (stack1.length || stack2.length) {
    let num1 = stack1.pop() || 0;
    let num2 = stack2.pop() || 0;
    let sum = num1 + num2 + mark;
    mark = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    node.next = cur;
    cur = node;
  }
  if (mark > 0) {
    let node = new ListNode(mark);
    node.next = cur;
    cur = node;
  }
  return cur;
}
module.exports = {
  addInList: addInList,
};
