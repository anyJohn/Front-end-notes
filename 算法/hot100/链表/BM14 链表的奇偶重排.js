/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 双指针，单O(n)解法
 * @param {*} head
 * @returns
 */
function oddEvenList(head) {
  // write code here
  if (!head) return null;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
/**
 * 双O(n)解法，辅助栈
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param head ListNode类
 * @return ListNode类
 */
function oddEvenList(head) {
  // write code here
  let arr1 = [];
  let arr2 = [];
  let cur = head;
  let count = 1;
  while (cur) {
    if (count % 2 === 0) {
      arr2.push(cur.val);
    } else {
      arr1.push(cur.val);
    }
    count++;
    cur = cur.next;
  }
  let node = new ListNode(-1);
  let curNode = node;
  for (let item of arr1) {
    curNode.next = new ListNode(item);
    curNode = curNode.next;
  }
  for (let item of arr2) {
    curNode.next = new ListNode(item);
    curNode = curNode.next;
  }
  return node.next;
}
module.exports = {
  oddEvenList: oddEvenList,
};
