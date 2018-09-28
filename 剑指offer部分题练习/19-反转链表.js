

public ListNode ReverseList(ListNode head) {
    ListNode pre = null;
    ListNode next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}



function ReverseList(pHead)
{
    var pre = null;
    return (function f(p){
        if(!p) return pre;
        var t = p.next;
        p.next=pre;
        pre=p;
        return f(t);
    })(pHead);
}

