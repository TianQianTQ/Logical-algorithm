var instr = readline();
var rtotal = instr.match(/R/g).length;
var rcount = 0;
var t;
var n = instr.length;
var min = rtotal;
for(var i=0;i<n;i++){
    if(instr[i]=="R"){
        rcount++;
    }
    t = rtotal-2*rcount+i+1;
    if(t<min){
        min = t;
    }
}
console.log(min);