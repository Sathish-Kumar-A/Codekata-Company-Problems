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
   let n=data1[0];
   let k=data1[1];
   let data2=userinput[1].split(" ");
   for(var i=0;i<k;i++){
       data2.push(data2[0]);
       data2.shift();
   }
   console.log(data2.join(" "));
});
