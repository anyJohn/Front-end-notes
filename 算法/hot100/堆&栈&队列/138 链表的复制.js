
// Definition for a _Node.
function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * 加属性做法，在原链表上添加一个标记到复制的链表上
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }
    const res = new _Node();
    let resHead = res;
    let cur = head;
    while (cur) {
        resHead.next = new _Node(cur.val, undefined, cur.random);
        cur.copy = resHead.next;
        resHead = resHead.next;
        cur = cur.next
    }
    resHead = res;
    while (resHead) {
        resHead.random = resHead.random?.copy || null
        resHead = resHead.next;
    }
    cur = head;
    return res.next;
};

/**
 * 用哈希表记录下复制的节点
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    let cur = head;
    let map = new Map()
    while (cur) {
        map.set(cur, new _Node(cur.val))
        cur = cur.next
    }
    cur = head
    while(cur) {
        const head = map.get(cur)
        head.next = map.get(cur.next) || null
        head.random = map.get(cur.random) || null
        cur = cur.next
    }
    return map.get(head)
};




const node1 = new _Node(1, null, null)
const node2 = new _Node(2, null, null)
node1.next = node2
node1.random = node2
node2.random = node2

const res = copyRandomList(node1)
console.log(res)