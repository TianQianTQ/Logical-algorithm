function choice(arr){
	var len = arr.length;
	for(var i=0;i<len;i++){
		var k = i;
		for(var j=i+1;j<len;j++){
			if(arr[k]>arr[j]){
				k = j;
			}
			if(i!=k){
				var temp = arr[i];
				arr[i] = arr[k];
				arr[k] = temp;
			}
		}
	}
	return arr;
}
