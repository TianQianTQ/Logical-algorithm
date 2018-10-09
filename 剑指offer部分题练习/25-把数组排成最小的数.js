/*
 *题目描述：输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，
 * 则打印出这三个数字能排成的最小数字为321323。
 * 思路：
 * 1、设置比较器，对numbers中的数进行排序 
 * 2、如比较“3”和“32”时，比较“332”和“323”，则“323”较小
 * 3、知道sort排序的原理：a<b 返回小于0的值；a=b返回0; a>b返回大于0 的值
 */
function compare(a, b){
    var str1 = a + "" + b;
    var str2 = b + "" + a;
    for(var i = 0; i < str1.length; i++){
        if(str1.charAt(i) > str2.charAt(i)){
            return 1;
        }
        if(str1.charAt(i) < str2.charAt(i)){
            return -1;
        }
    }
    return 1;
}
function PrintMinNumber(numbers)
{
    // write code here
    numbers.sort(compare);
    var result = "";
    for(var i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
     
}

function PrintMinNumber(numbers){
      let minNum = numbers.sort(function(a,b){
        return [a,b].join("") - [b,a].join("")
    });
    return minNum.join("");
}

function PrintMinNumber(numbers)
{
    if (numbers.length == 0) {
        return '';
    }
     
    numbers.sort(function (a, b) {
        var a = a.toString();
        var b = b.toString();
        return a + b > b + a;
    });
     
    return numbers.join('');
}