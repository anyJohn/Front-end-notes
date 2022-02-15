/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead) {
        return pHead;
    }
    const nodeSet = new Set()
    let size = 0;
    while(pHead) {
        nodeSet.add(pHead)
        size++
        if(nodeSet.size!==size) {
            return pHead;
        }
        pHead = pHead.next
    }
    
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};