/* 题目描述：把只包含质因子2、3和5的数称作丑数（Ugly Number）。
   例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 * 思路：1、理解什么是丑数，得到丑数的规律
 *       2、按照题目规定，第一个丑数是1，放入数组
 *       3、规律：第二个丑数是第一个丑数分别与2,3,5相乘,1*2, 1*3 1*5得到的最小的数字，即2
 *       4、     第三个丑数是2(+1)*2 1*3 1*5中的最小值，即3
 *       5、     第四个丑数是2*2 2(+1)*3 1*5中的最小值，即4
 *       6、     第五个丑数是3(+1)*2 2*3 1*5中的最小值，即5，以此类推
 * 
 */
function GetUglyNumber_Solution(index)
{
    if (index === 0) return 0;
    var uglyNum = [1];
    var factor2 = 0,
        factor3 = 0,
        factor5 = 0;
    for (var i = 1; i < index; i++) {
        uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
        if (uglyNum[i] === uglyNum[factor2] * 2) factor2++;
        if (uglyNum[i] === uglyNum[factor3] * 3) factor3++;
        if (uglyNum[i] === uglyNum[factor5] * 5) factor5++;
    }
    return uglyNum[index - 1];
}