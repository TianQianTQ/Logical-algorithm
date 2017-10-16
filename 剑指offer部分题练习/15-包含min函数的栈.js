/*
  题目描述：
   定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
   在该栈中，调用min，push及pop的时间复杂度都是O(n);
 * */
function push(node)
{
    arr.push(node);
}
function pop()
{
    return arr.pop();
}
function top()
{
    return arr[0];
}
function min()
{
    return Math.min.apply(this,arr);
}
var arr = [];