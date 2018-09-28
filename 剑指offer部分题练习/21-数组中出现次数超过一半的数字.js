/*
   题目描述：
   数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
   例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
   思路：
   1、创建一个对象，key为数组出现过的数字，value为该数字出现的次数
   2、遍历对象，找出返回value大于数组长度一半的key并输出
 * */
    function MoreThanHalfNum_Solution(numbers){
    	var obj = {}
    	var length = numbers.length
    	numbers.forEach(function(d){
    		if(obj[d]){
    			obj[d]++
    		}else{
    			obj[d] = 1
    		}
    	})
    	var halfL = Math.floor(length/2)
    	for(var i in obj){
    		if(obj[i] > halfL){
    			return i
    		}
    	}
    	reutrn 0
    }