function ListNode(x) {
  this.val = x;
  this.next = null;
}

/** 暴力法，通过数组记录值，翻转后覆盖原链表的值
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  // write code here
  // 结果数组
  let arr = [];
  // 用来反转的临时数组
  let tempArr = [];
  // 计数
  let count = 0;
  // 记录遍历的当前位置
  let cur = head;
  while (cur) {
    tempArr.push(cur.val);
    count++;
    if (count === k) {
      tempArr.reverse();
      arr = [...arr, ...tempArr];
      tempArr = [];
      count = 0;
    }
    cur = cur.next;
  }
  // 遍历
  let node = head;
  for (const item of arr) {
    node.val = item;
    node = node.next;
  }
  return head;
}

/**
* 递归，遍历链表，反转记录的指针之间的链表，复杂度O(n) O(1)
* @param head ListNode类 
* @param k int整型 
* @return ListNode类
*/
function reverseKGroup( head ,  k ) {
  // write code here
  if(!head) return null;
  if(k===1) return head;
  let cur = head;
  for(let i = 0; i < k; i++) {
      if(!cur) return head
      cur = cur.next;
  }
  let res = reverse(head,cur);
  head.next = reverseKGroup(cur,k);
  return res;
}
function reverse(head,tail) {
  let pre = tail;
  while(head && head !== tail) {
      let temp = head.next;
      head.next = pre;
      pre = head;
      head = temp;
  }
  return pre;
}
module.exports = {
  reverseKGroup: reverseKGroup,
};
