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
   let data1=userinput[1];
   let data2=userinput[2];
   let min;
   if(data1.length>data2.length){
       min=data2.length;
   }
   else{
       min=data1.length;
   }
   let str="";
   for(var i=0;i<min;i++){
       if(data1[i]==data2[i]){
           str+=data1[i];
       }
       else{
           break;
       }
   }
   console.log(str);
});
