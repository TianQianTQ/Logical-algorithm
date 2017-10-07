 var a="abc",b='cba';
     var a1=a.split(""),b1=b.split('');
     var x=0;
     for(var i=0;i<a1.length;i++){
     	for(var j=0;j<b1.length;j++){
     		if(a1[i]==b1[j]&&a1[i-1]==b1[j+1]){
     			x++;
     		}
     	}
     }
     console.log(Math.pow(2,(x-1)));