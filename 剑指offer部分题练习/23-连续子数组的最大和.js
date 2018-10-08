/* 题目描述： 
 *  求连续子数组的最大和。当向量全为正数的时候,问题很好解决。
 * 但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 * 给一个数组，返回它的最大连续子序列的和(子向量的长度至少是1)
 * 思路:1、定义两个变量，result指数组累加的和，max指向最大和
 * 		2、遍历数组，遇到负的和则放弃之前的结果，并重新累计，这期间保留最大值
 * 		3、max和result比较，每次循环保证max为最大值
 * 坑：对累加和是负数的操作
 */
function FindGreatestSumOfSubArray(array)
{
    if(array.length < 0) return 0
    var result = array[0],
        max = array[0]
    for(var i = 1; i< array.length; i++){
        result = (result < 0) ? array[i] : result + array[i];
        max = (result > max) ? result : max;
    }
    return max
}