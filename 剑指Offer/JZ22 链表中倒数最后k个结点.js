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
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
  // write code here
  if(!pHead){
      return pHead;
  }
  if(!k) {
      return null;
  }
  let fast = pHead;
  let slow = pHead;
  let count = 1;
  while(fast.next) {
      if(count === k) {
          slow = slow.next
      } else {
          count++;
      }
      fast = fast.next;
  }
  if(count < k) {
      return null
  }
  return slow
}
module.exports = {
  FindKthToTail : FindKthToTail
};