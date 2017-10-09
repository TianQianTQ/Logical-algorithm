/*
 * 题目描述：用两个栈实现队列
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 思路：
 *    入队：将元素进栈1
 *    出队：判断栈2是否为空，如果为空，则将栈1中的所有元素pop，并push进栈2，栈2出栈，如果不为空，栈2直接出栈
 * */
function Stack(){
    var item = [];
    this.push = function (node){
        item.push(node);
    };
    this.pop = function (){
        return item.pop();
    }
    this.isEmpty = function (){
        return item.length===0;
    }
}
 
var stack1 = new Stack();
var stack2 = new Stack();
 
function push(node)
{
    stack1.push(node);
}
function pop()
{
        if(stack1.isEmpty() && stack2.isEmpty()){
        throw new Error("Queue is empty");
    }
    if(stack2.isEmpty()){
       while(!stack1.isEmpty()){
           stack2.push(stack1.pop());
       }
    }

    return stack2.pop();
     
}