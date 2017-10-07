function maopao(arr){
        var len = arr.length;
        for(var i=0, flag=1 ; i<len && flag==1 ; i++){
            flag=0;
            for(var j=0;j<len-1-i;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
                flag=1;
            }
        }
        return arr;
}
