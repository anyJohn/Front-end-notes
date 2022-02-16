/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let nodeSet = new Set();
  while (pHead1) {
    nodeSet.add(pHead1);
    pHead1 = pHead1.next;
  }
  while (pHead2) {
    if (nodeSet.has(pHead2)) {
      return pHead2;
    }
    pHead2 = pHead2.next;
  }
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
