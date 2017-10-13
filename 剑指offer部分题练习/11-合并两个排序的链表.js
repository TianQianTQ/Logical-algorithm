/*
  题目描述：
  输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
  
  思路描述：
  1、判断两个链表中有没有空链表，如果有则直接返回另一个链表
  2、定义一个对象，比较兰格链表的头结点的值，若list1的head小于list2的head,则result=list1的head值，
  next为List1的next值与list2的head值比较的结果，递归调用该函数，最后输出result
 * */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    if(pHead1 == null){
        return pHead2;
    }else if(pHead2 == null){
        return pHead1;
    }
    var result = {};
    if(pHead1.val < pHead2.val){
        result = pHead1;
        result.next = Merge(pHead1.next,pHead2);
    }else{
        result = pHead2;
        result.next = Merge(pHead1,pHead2.next);
    }
    return result;
}