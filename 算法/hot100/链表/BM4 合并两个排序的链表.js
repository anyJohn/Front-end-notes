function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 双O(n)解法
 * @param {*} pHead1
 * @param {*} pHead2
 * @returns
 */
function Merge(pHead1, pHead2) {
  // write code here
  if (!pHead1 || !pHead2) return pHead1 || pHead2;
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let cur1 = pHead1;
  let cur2 = pHead2;
  while (pHead1) {
    arr1.push(pHead1.val);
    pHead1 = pHead1.next;
  }
  while (pHead2) {
    arr2.push(pHead2.val);
    pHead2 = pHead2.next;
  }
  arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  let node = new ListNode(arr[0]);
  let cur = node;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return node;
}

/**
 * 单O(n) 解法
 * @param {*} pHead1
 * @param {*} pHead2
 * @returns
 */
function Merge(pHead1, pHead2) {
  // write code here
  let result = new ListNode(-1);
  let cur = result;
  while (pHead1 && pHead2) {
    if (pHead1.val < pHead2.val) {
      let temp = pHead1.next;
      cur.next = pHead1;
      pHead1.next = null;
      cur = pHead1;
      pHead1 = temp;
    } else {
      let temp = pHead2.next;
      cur.next = pHead2;
      cur = pHead2;
      pHead2.next = null;
      pHead2 = temp;
    }
  }
  if (pHead1) {
    cur.next = pHead1;
  }
  if (pHead2) {
    cur.next = pHead2;
  }
  return result.next;
}
module.exports = {
  Merge: Merge,
};
