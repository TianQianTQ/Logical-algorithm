/*
 *  每个人都需要独立的空间，即每个人左右的位置都没有人坐。
 *  已知一串数字，0代表该位置为空，1代表该位置有人坐；
 *  一个数字M代表需要有多少人坐，求这些人够不够坐，够返回true，不够则返回false
 * */

var str="00000000001";
   var p=4;
   var arr=str.split("");
   var s=p;
   for(var i=0;i<arr.length;i++){
   	    if(i==0 && arr[i]==0 && arr[i+1]==0){
   	    	arr[i]=1;
   	    	s--;
   	    }else if(i==arr.length-1 && arr[i]==0 && arr[i-1]==0){
   	    	arr[i]=1;
   	    	s--;
   	    }else if(arr[i]==0 && arr[i-1]==0 && arr[i+1]==0){
   			arr[i]=1;
   			s--;
   		}
   	}
   if(s<=0) console.log("true");
   else console.log("false");