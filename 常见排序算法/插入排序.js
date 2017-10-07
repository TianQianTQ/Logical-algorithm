function charu(arr){
        var len = arr.length;
        
        var j,temp;
        for(var i=1;i<len;i++){
            j = i-1;
            temp = arr[i];
            while(j>=0 && arr[j] > temp){   //如果前面位置的值比标记位的值大，则向后移，将标记位的值放在移之后空的位置
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
        return arr;
    }
