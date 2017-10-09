/*
  题目描述： 二维数组中的查找
 *在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。 
 *请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 */
function Find(target,array){
	var i = array.length-1,          //选取左下角
	    j = 0;
	while(i>=0 && array[i][j]){
		if(array[i][j]<target){
			j++;
		}else if(array[i][j]>target){
			i--;
		}else{
			return true;
		}
	}
	return false;
	/*var i = 0,                     //选取右上角
	      j = array[0].length - 1;
	while(j>=0 && i<array.length){
		if(array[i][j]>target){
			j--;
		}else if(array[i][j]<target){
			i++;
		}else{
			return true;
		}
	}
	return false;*/
}
//测试用例
var array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
var target = 7;
console.log(Find(target,array));
