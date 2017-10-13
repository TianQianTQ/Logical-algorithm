/*
 * 题目描述：旋转数组的最小数字
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 思路：
 * 　旋转之后的数组实际上可以划分成两个有序的子数组：前面子数组的大小都大于后面子数组中的元素，实际上最小的元素就是两个子数组的分界线。

	1、我们用两个指针low和high分别指向数组的第一个元素和最后一个元素。
	按照题目的旋转的规则，第一个元素应该是大于等于最后一个元素的；但是如果不是旋转，第一个元素肯定小于或等于最后一个元素。

	2、找到数组的中间元素。中间元素大于最后一个元素，则中间元素位于前面的递增子数组，
	此时最小元素位于中间元素的后面。我们可以让第一个指针low指向中间元素。

	3、中间元素小于最后一个元素，则中间元素位于后面的递增子数组，此时最小元素位于中间元素的前面。
	我们可以让第二个指针high指向中间元素。

	4、中间元素等于最后一个元素，则将第二个指针向前移，然后继续比较。
 * */
function minNumberInRotateArray(rotateArray)
{
    var len = rotateArray.length;
    if(len == 0){
        return 0;
    }else{
        var low = 0,
            high = len -1 ;
        while(low < high){
            var mid = low + Math.floor((high - low)/2);
            if(rotateArray[mid] > rotateArray[high]){
                low = mid + 1;
            }else if(rotateArray[mid] == rotateArray[high]){
                high = high -1;
            }else{
                high = mid;
            }
        }
        return rotateArray[low];
    }
}