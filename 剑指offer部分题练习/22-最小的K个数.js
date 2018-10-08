/* 题目描述：
    输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
   思路：
    1、使用选择排序：每一趟排序将最小的往前放，限制第一个循环的次数，即将最小的k个置于数组最前面，就是该数组最小的k个数
    2、使用js的Array对象中的sort()排序，然后截取最小的k个数
    3、利用快排原理，基于数组第k个值作为key值，使得比key小的都放在左边，比key大的放在右边。 
 */

function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var length = input.length,
        result = []
    if(length < 0 || input < k || k <= 0){
        return false
    }
    for(var i = 0; i< k ; i++){
        for(var j = i+1; j < length; j++){
            if(input[i] > input[j]){
                var temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    var s = 0
    while(s < k){
        result.push(input[s])
        s++
    }
    return result
}
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var length = input.length,
        result = []
    if(length < 0 || input < k || k <= 0){
        return false
    }
    input.sort(function(a,b){
        return a - b
    })
    return input.slice(0,k)
}

function quickSort(arr, start, end) {
    var pivot = arr[end]; 
    var i = start; 
    for (var j = start; j < end; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    var temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    return i;
}
function GetLeastNumbers_Solution(input, k) {
    var result = [];
    if (input.length < 0 || k > input.length || k <= 0) {
        return false;
    }
    var start = 0;
    var end = input.length - 1;
    var p = partation(input, start, end);
    while (p !== (k - 1)) {
        if (p > (k - 1)) {
            end = p - 1;
            p = partation(input, start, end);
        } else {
            start = p + 1;
            partation(input, start, end);
        }
    }
    for (var i = 0; i < k; i++) {
        result.push(input[i]);
    }
    return result;
}

