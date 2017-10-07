var str="hi, i am a robor.";
   var arrs = str.split(" ");
   arrs.reverse();
   console.log(arrs);
   var reg = /[,|.|!|?]/;
   for(var i=0;i<arrs.length;i++){
   		if(reg.test(arrs[i])){
   			var a = arrs[i].slice(arrs[i].length-1);
   			arrs[i]=a+arrs[i].substring(0,arrs[i].length-1);

   			//console.log(arrs[i]);
   		}
   }
   console.log(str);
   console.log(arrs.join(" "));