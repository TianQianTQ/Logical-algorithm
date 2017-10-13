/*
  题目描述：
  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
  所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
  如：12345 --》13524
  扩展：代码的复用性，如负数都在非负数前面，能被三整除的都在不能被三整除的数前面
 * */
function reOrderArray(array)
{
    var odd = [];
    var even = [];
    for(var i=0;i<array.length;i++){
        if(array[i]%2 === 0){
            even.push(array[i]);
        }else{
            odd.push(array[i]);
        }
    }
    return odd.concat(even);
}

//通用性：
function reOrderArray(array)
{
    var odd = [];
    var even = [];
    for(var i=0;i<array.length;i++){
        if(iseve(array[i])){
            even.push(array[i]);
        }else{
            odd.push(array[i]);
        }
    }
    return odd.concat(even);
}
function iseve(n){
    if(n%2===0){
        return true;
    }else{
        return false;
    }
}