/* 题目描述：
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 
 * 如果没有则返回 -1（需要区分大小写）.
 * 思路：
 * 1、将字符串转换为数组，使用对象obj保存key值和key出现的次数，使用对象objIndex保存字符第一次出现的位置。
 *   for/in循环对象obj的key值出现次数，一旦发现是1，则打印key对应的位置，否则返回-1
 * 2、使用String对象的lastIndexOf()方法，该方法返回一个指定字符串最后出现的位置。(对大小写敏感)
 *   indexof()方法返回字符第一次出现的位置。
 *   如果字符首次出现位置和最有一次出现位置相同，说明该字符只出现过一次，打印
 * 3、使用字符串String对象includes()方法检索是否包含当前字符
*/
function FirstNotRepeatingChar(str)
{
    var arr = str.slice('')
    var obj = {}
    var objIndex = {}
    for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
            objIndex[arr[i]] = i
        }
    }
    for(key in obj){
        if(obj[key] == 1){
            return objIndex[key]
        }
    }
    return -1
}

function FirstNotRepeatingChar(str)
{
    var length=str.length;
    for(var i=0;i<length;i++)
    {
       if(str.lastIndexOf(str[i])==str.indexOf(str[i]))
       {
           return i;
           break;
       }
 
    }
    return -1;
}

function FirstNotRepeatingChar(str)
{
    if(!str) return -1;
    for(let i=0;i<str.length;i++){
        if(!str.slice(0,i).concat(str.slice(i+1)).includes(str[i])){
            return i;
        }
    }
    return -1;
}