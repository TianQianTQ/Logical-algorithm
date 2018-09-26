/*
  题目描述：
  给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 
  思路：
  1、js中存在的方法：Math.pow(num,power)  返回num的power次幂
  2、当指数exponent为0，X的0次幂为1；当指数exponent为1，x的1次幂为x本身；
    当指数大于0，x的exponent次幂为x与自己相乘exponent次；
    当指数小于0，x的exponent次幂为x的倒数与x倒数相乘exponent次。
  
 * */

function Power(base, exponent)
{
    if(exponent == 0){
        return 1
    }
    if(exponent == 1){
        return base
    }
    let result = 1;
    while(exponent != 0){
        if(exponent > 0){
            exponent --
            result *= base
        }else{
            exponent ++
            result *= 1/base
        }
    }
    return result
}

function Power(base, exponent)
{
    return Math.pow(base,exponent);
}