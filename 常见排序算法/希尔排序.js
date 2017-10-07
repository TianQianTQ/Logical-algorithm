function xier(arr){
        var len = arr.length;
        
        var temp,d=1;
        while(d < len/3){
            d = d*3+1;
        }
        for(d; d>0; d=Math.floor(d/3)){
            for(var i=d; i<len; i++){
                if(arr[i]<arr[i-d]){    //每个元素与自己组内的数据进行直接插入排序
                    temp = arr[i];
                    for(var j=i-d; j>=0 && arr[j]>temp; j-=d){
                        arr[j+d] = arr[j];
                    }
                    arr[j+d] = temp;
                }
            }
        }
        return arr;
    }
