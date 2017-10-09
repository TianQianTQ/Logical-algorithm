/*
 * 题目描述：从尾到头打印链表
 * 输入一个链表，从尾到头打印链表每个节点的值。 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    var res = [];
    while(head){
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}