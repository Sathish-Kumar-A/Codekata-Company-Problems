
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
 a=data;
 let tmp=[];
 for(var i=0;i<a.length;i++){
     tmp.push(a[i]);
 }
 for(var j=0;j<tmp.length;j++){
     for(var k=0;k<tmp.length-j-1;k++){
         if(tmp[k]>tmp[k+1]){
             let max=tmp[k];
             tmp[k]=tmp[k+1];
             tmp[k+1]=max;
         }
     }
 }
 let str="";
 for(var t=0;t<tmp.length;t++){
     str+=tmp[t];
 }
 console.log(str);
});
