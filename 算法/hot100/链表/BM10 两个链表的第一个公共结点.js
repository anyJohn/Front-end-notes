/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 双O(n)解法
 * @param {} pHead1
 * @param {*} pHead2
 * @returns
 */
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  const set = new Set();
  while (pHead1) {
    set.add(pHead1);
    pHead1 = pHead1.next;
  }
  while (pHead2) {
    if (set.has(pHead2)) {
      return pHead2;
    }
    set.add(pHead2);
    pHead2 = pHead2.next;
  }
  return null;
}
/**
 * 单O(n)解法
 * @param {*} pHead1
 * @param {*} pHead2
 * @returns
 */
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let cur1 = pHead1;
  let cur2 = pHead2;
  let count = 0;
  while (cur1 && cur2) {
    if (cur1 === cur2) {
      return cur1;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
    if (!cur1) {
      cur1 = pHead2;
      count++;
    }
    if (!cur2) {
      cur2 = pHead1;
      count++;
    }
    if (count > 2) {
      break;
    }
  }
  return null;
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
