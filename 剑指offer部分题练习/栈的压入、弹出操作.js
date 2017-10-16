/*
  题目描述：
  输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
  假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
  序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
  （注意：这两个序列的长度是相等的）
  思路：
  1、首先判断数组 A B 的长度，满足条件进行下一步
  2、新建一个数组，头插法放A 的元素，同时判断数组B的第i个元素与新数组的第一个元素是否相同，相同则出栈，不同继续循环
  3、判断新建的数组长度，返回Boolean值
 * */
function IsPopOrder(pushV, popV)
{
    if(pushV.length===0 || popV.length===0){
        return null;
    }
    var temp=[];
    var popIndex = 0;
    for(var i=0;i<pushV.length;i++){
        temp.unshift(pushV[i]);
        while(temp.length && temp[0] == popV[popIndex]){
            temp.shift();
            popIndex++;
        }
    }
    return  (temp.length ===0);
}