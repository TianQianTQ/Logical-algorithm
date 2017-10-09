/*
  题目描述：替换空格 
 *请实现一个函数，将一个字符串中的空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */
/*function replaceSpace(str)
{
    var arr = str.split('');
    for(var i=0;i<arr.length;i++){
        if(arr[i] == ' '){
            arr[i] = '%20';
        }
    }
    
    return arr.join('');
}*/
function replaceSpace(str){
	return str.replace(/\s/g,'%20')
}
var str = 'We Are Happy.';
console.log(replaceSpace(str));
