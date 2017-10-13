/*
  题目描述：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
  斐波那契数列：      --题目扩展：青蛙跳台阶      变态跳台阶     矩形覆盖问题
  f(n) = |~    0     n=0
         |~    1     n=1
         |~ f(n-1)+f(n-2)  n>1
 * */
//推荐思路：
function Fibonacci(n)
{
    var arr = [0,1];
    if(n < 2){
        return arr[n];
    }
    var one = 0,
        two = 1,
        res = 0;
    for(var i=2;i<=n;++i){
        res = one + two;
        one = two;
        two = res;
    }
    return res;
}
//递归：
function Fibonacci(n){
	var arr = [0,1];
	if(n<2){
		return arr[n];
	}else{
		return Fibonacci(n-1)+Fibonacci(n-2);
	}
}
console.log(Fibonacci(10));

/*一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
function jumpFloor(number)
{
   if(number < 0){
       return -1;
   }else if(number <= 2){
       return number;
   }
   	var res = 0,
   	    one = 1,
   	    two = 2;
   	    for(var i=3;i<=number;i++){
   	    	res = one + two;
   	    	one = two;
   	    	two = res;
   	    }
   	    return res;
}
 /* 变态跳台阶
  一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
  思路:使用数学归纳法,可得到f(n) = 2^(n-1);
 */
function jumpFloorII(number)
{
        if(number ===0 ){
            return -1;
        }
        return Math.pow(2,number-1);
}
/*矩形覆盖问题
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */
function rectCover(number)
{
    if(number < 0){
        return -1;
    }else if(number<=2){
        return number;
    }else{
        var one = 1,
            two = 2,
            res = 0;
        for(var i = 3;i<=number;i++){
            res = one+two;
            one = two;
            two = res;
        }
        return res;
    }
}