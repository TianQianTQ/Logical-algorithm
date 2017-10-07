function sort(arr,i,length){
        var temp = arr[i];
        for(var j=i*2+1;j<length;j=j*2+1){   //倒数第一个非叶子节点的左节点，
            if(j+1<length && arr[j]<arr[j+1]){ //如果有右节点且右节点大于左节点
                j++;                         //j的值为该非叶子节点的最大子节点
            }
            if(temp>arr[j]){           
                break;
            }
            arr[i]=arr[j];
            arr[j] = temp;
            i=j;               //将i指向最大的子节点,沿被破坏的路径继续调整
        }
    }
    function create(arr){
        for(var i=arr.length/2-1;i>=0;i--){   //从倒数第一个非叶子节点开始
            sort(arr,i,arr.length);           //建立大顶堆/小顶堆
        }
        for(var j=arr.length-1;j>0;j--){
            var temp = arr[j];
            arr[j] = arr[0];
            arr[0] = temp;
            sort(arr,0,j);
        }
        return arr;
    }
