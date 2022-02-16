// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }
function Merge(pHead1, pHead2) {
  //     // write code here
  //     let cur = new ListNode(null);
  //     let foo = cur;
  //     console.log(foo)
  //     if(!(pHead1 || pHead2)) {
  //         return pHead1 || pHead2;
  //     }
  //     while(pHead1 && pHead2) {
  //         if(pHead1.val <= pHead2.val) {
  //             cur.next = pHead1;
  //             pHead1 = pHead1.next
  //         } else {
  //             cur.next = pHead2;
  //             pHead2 = pHead2.next;
  //         }
  //         cur = cur.next;
  //     }
  //     cur.next = pHead1? pHead1 : pHead2;
  //     return foo.next;
  if (!pHead1 || !pHead2) {
    return pHead1 || pHead2;
  }
  if (pHead1.val <= pHead2.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead2.next, pHead1);
    return pHead2;
  }
}
module.exports = {
  Merge: Merge,
};
