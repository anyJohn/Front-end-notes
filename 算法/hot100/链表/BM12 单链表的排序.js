function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 *
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  // write code here
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  let node = new ListNode(-1);
  let cur = node;
  for (const item of arr) {
    cur.next = new ListNode(item);
    cur = cur.next;
  }
  return node.next;
}
module.exports = {
  sortInList: sortInList,
};
