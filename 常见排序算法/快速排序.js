function kqSort(arr,left,right){
        if(left < right){
            var index = Math.floor(Math.random()*(right-left)+left);  
             //选择一个随机的位置作为key值
            var key = arr[index];
            arr[index] = arr[right];
            arr[right] = key;
            var i,j=left;
                 //定义两个位置指针，从头开始遍历
                 //j位置的值与Key值比较，若大于key的值则不变，若小于则与i的值交换
                 //   i<key     key     j>key
            while(j<right){
                if(arr[j]<key){
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    i++;
                }
                j++;
            }
            //循环比较到最后，i的值指向比key大的第一个值，j的值=key
            arr[j] = arr[i];
            arr[i] = key;
            kqSort(arr,0,i-1);
            kqSort(arr,i+1,right);
        }
        return arr;
    }
