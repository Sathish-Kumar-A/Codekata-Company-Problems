const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
    a.push(data);
});
inp.on("close",()=>{
   data1=a[1].split(" ");
   let x=a[2];
   let count=0;
   for(var i=0;i<data1.length;i++){
       let res='';
       for(var j=0;j<x.length;j++){
           res+=data1[i][j];
       }
       if(res==x){
           count+=1;
       }
   }
   console.log(count);
});
