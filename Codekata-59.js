// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userinput=[];

inp.on("line", (data) => {
  userinput.push(data);
});
inp.on("close",()=>{
   let data1=userinput[0].split(" ");
   let data2=userinput[1].split(" ");
   let k=data1[1];
   let count=0;
   for(var i=0;i<data2.length;i++){
       for(var j=0;j<data2.length;j++){
           if(Math.abs(data2[i]-data2[j])==k){
               count+=1;
           }
       }
   }
   console.log(count/2);


});
