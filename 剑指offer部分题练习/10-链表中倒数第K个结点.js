/*
  题目描述：
  输入一个链表，输出该链表中倒数第k个结点。
  思路描述：
  定义两个指针，
  判断条件：1、头指针是否为空  2、k值是否大于0
 满足以上条件后，让第一个指针先走k步，期间如果还没走k步便到链表尾部则返回错误
 然后两个指针一起往前走，直到第一个指针走到链表尾部，输出第二个指针的值
 * */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    if(head == null || k<=0){
        return null;
    }
    var pre = head,
        last = head;
    for(var i=1;i<k;i++){
        if(pre.next !== null){
            pre = pre.next;
        }else{
            return null;
        }
    }
    while(pre.next !== null){
        pre = pre.next;
        last = last.next;
    }
    return last;
}