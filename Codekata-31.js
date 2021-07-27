
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
  });
inp.on("close",()=>{
    let tmp=[];
   data1=a[1].split(" ");
   for(var i=0;i<data1.length;i++){
       if(i==data1[i]){
           tmp.push(i);
       }
   }
   if(tmp.length>0){
       console.log(...tmp);
   }
   else{
       console.log(-1);
   }
});
