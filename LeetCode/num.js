/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ret = new ListNode(0, undefined)
    let cRet = ret

    let c1 = l1
    let c2 = l2
    while (c1 || c2) {
        if (!c1) {
            c1 = new ListNode(0, undefined)
        }
        if (!c2) {
            c2 = new ListNode(0, undefined)
        }
        let carryOver = 0
        let sumVar = c1.val + c2.val + cRet.val;
        if (sumVar > 9) {
            sumVar = sumVar % 10;
            carryOver = 1
        }
        cRet.val = sumVar
        c1 = c1.next
        c2 = c2.next
        if (c1 || c2 || carryOver){
            cRet.next = new ListNode(carryOver, undefined)
        }
        cRet = cRet.next
    }
    return ret
};